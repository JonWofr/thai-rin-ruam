import { Component, Input, OnInit } from '@angular/core';

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
  filteredOptions: Option[] = this.options;
  shouldShowDropdownMenu = false;

  constructor() {}

  ngOnInit(): void {}

  onKeyUp(value: string) {
    const regExp = new RegExp(value, 'i');
    this.filteredOptions = this.options.filter((option) =>
      regExp.test(option.label)
    );
  }

  toggleDropdownMenu() {
    this.shouldShowDropdownMenu = !this.shouldShowDropdownMenu;
  }
}
