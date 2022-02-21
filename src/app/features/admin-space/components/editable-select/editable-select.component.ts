import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectType } from '../../enums/select-type.enum';
import { Option } from '../../../../shared/models/option.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'admin-space-editable-select',
  templateUrl: './editable-select.component.html',
  styleUrls: ['./editable-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: EditableSelectComponent,
    },
  ],
})
export class EditableSelectComponent implements OnInit, ControlValueAccessor {
  get options() {
    return this._options;
  }
  @Input() set options(options: Option[]) {
    this._options = options;
    this.filterOptions();
    this.shouldShowCreateOption();
  }
  @Input() placeholder = '';
  @Input() type: SelectType = SelectType.MULTI;
  @Input() isEditable = true;
  @Output() clickCreateButton = new EventEmitter<string>();
  @Output() clickDeleteButton = new EventEmitter<Option>();

  private _options: Option[] = [];
  filteredOptions: Option[] = [];
  selectedOptions: Option[] = [];
  inputValue = '';
  shouldShowDropdownMenu = false;
  hasCreateOption = false;
  hasBeenTouched = false;
  inputId = uuidv4();

  SelectType = SelectType;

  // Angular form control callbacks will be stored in these variables. Until then
  // empty functions are used to avoid the risk of calling the function without the
  // function being initialised.
  onChange = (selectedOptions: Option[]) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  // Control value accessor interface methods
  writeValue(selectedOptions: Option[] | null): void {
    if (selectedOptions) {
      this.selectedOptions = selectedOptions;
    }
    this.filterOptions();
    this.shouldShowCreateOption();
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  //

  onKeyUp(value: string) {
    this.inputValue = value;
    this.filterOptions();
    this.shouldShowCreateOption();
  }

  /**
   * Already selected options are filtered out as well as options that do not match the current input value
   */
  filterOptions() {
    const regExp = new RegExp(this.inputValue, 'i');
    this.filteredOptions = this.options.filter(
      (option) =>
        regExp.test(option.label) &&
        !this.selectedOptions.find(
          (selectedOption) => selectedOption.value === option.value
        )
    );
  }

  showDropdownMenu() {
    this.shouldShowDropdownMenu = true;
  }

  hideDropdownMenu() {
    this.shouldShowDropdownMenu = false;
  }

  onClickDropdownMenuItem(option: Option) {
    this.selectedOptions.push(option);
    this.onChange(this.selectedOptions);
    this.inputValue = '';
    this.filterOptions();
    this.shouldShowCreateOption();
  }

  onClickChip(option: Option) {
    this.selectedOptions = this.selectedOptions.filter(
      (selectedOption) => selectedOption.value !== option.value
    );
    this.onChange(this.selectedOptions);
    this.filterOptions();
    this.shouldShowCreateOption();
  }

  // Prevent default text input behaviour triggered on enter
  onEnter(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  onFocus() {
    this.showDropdownMenu();
  }

  onBlur() {
    this.hideDropdownMenu();
    if (!this.hasBeenTouched) {
      this.onTouched();
      this.hasBeenTouched = true;
    }
  }

  shouldShowCreateOption() {
    this.hasCreateOption = this.isEditable && this.inputValue !== '';
  }

  onClickCreateButton() {
    this.clickCreateButton.emit(this.inputValue);
    this.inputValue = '';
    this.filterOptions();
    this.shouldShowCreateOption();
  }

  onClickDeleteButton(option: Option, mouseEvent: MouseEvent) {
    this.clickDeleteButton.emit(option);
    this.inputValue = '';
    this.filterOptions();
    this.shouldShowCreateOption();
    mouseEvent.stopPropagation();
  }
}
