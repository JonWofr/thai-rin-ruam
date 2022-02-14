import { Component, Input, OnInit } from '@angular/core';
import { SelectType } from '../../enums/select-type.enum';

type Option = { label: string; value: string };

@Component({
  selector: 'admin-space-editable-select',
  templateUrl: './editable-select.component.html',
  styleUrls: ['./editable-select.component.scss'],
})
export class EditableSelectComponent implements OnInit {
  @Input() options: Option[] = [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
    {
      label: 'Option 3',
      value: 'option3',
    },
  ];
  @Input() placeholder = '';
  @Input() type: SelectType = SelectType.MULTI;
  @Input() isEditable = true;

  filteredOptions: Option[] = this.options;
  shouldShowDropdownMenu = false;
  hasCreateOption = false;
  selectedOptions: Option[] = [];
  inputValue = '';
  hasFullOptionMatch = false;

  SelectType = SelectType;

  constructor() {}

  ngOnInit(): void {}

  onKeyUp(value: string) {
    this.inputValue = value;
    this.filterOptions();
    this.hasCreateOption = this.isEditable && this.inputValue !== '';
    this.showDropdownMenu();
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
    this.inputValue = '';
    this.filterOptions();
    this.hasCreateOption = false;
  }

  onClickChip(option: Option) {
    this.selectedOptions = this.selectedOptions.filter(
      (selectedOption) => selectedOption.value !== option.value
    );
    this.filterOptions();
    this.hasCreateOption = this.isEditable && this.inputValue !== '';
  }

  // Prevent default text input behaviour triggered on enter
  onEnter(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
