import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from 'src/app/shared/models/option.model';

@Component({
  selector: 'shared-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TabBarComponent,
    },
  ],
})
export class TabBarComponent implements OnInit, ControlValueAccessor {
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

  onChangeOption(selectedOption: Option) {
    this.selectedOption = selectedOption;
    this.onChange(this.selectedOption);
  }

  onBlur() {
    this.onTouched();
  }
}
