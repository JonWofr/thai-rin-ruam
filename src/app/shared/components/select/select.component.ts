import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from '../../models/option.model';

@Component({
  selector: 'shared-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder = '';
  @Input() options: Option[] = [];

  selectedOption?: Option;
  onChange = (selectedOption: Option) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(selectedOption: Option): void {
    this.selectedOption = selectedOption;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  onChangeSelect(value: string) {
    this.selectedOption = this.options.find(
      (option) => option.value === value
    )!;
    this.onChange(this.selectedOption);
  }

  onBlur() {
    this.onTouched();
  }
}
