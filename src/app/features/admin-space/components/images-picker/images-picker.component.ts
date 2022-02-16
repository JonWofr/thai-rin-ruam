import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'admin-space-images-picker',
  templateUrl: './images-picker.component.html',
  styleUrls: ['./images-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ImagesPickerComponent,
    },
  ],
})
export class ImagesPickerComponent implements OnInit, ControlValueAccessor {
  imageUrls: string[] = [];
  hasBeenTouched = false;

  onChange = (imageUrls: string[]) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(imageUrls: string[]): void {
    this.imageUrls = imageUrls;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  async onChangeFileInput(fileList: FileList | null) {
    if (!this.hasBeenTouched) {
      this.onTouched();
      this.hasBeenTouched = true;
    }
    if (!fileList) return;
    const readFilePromises = Array.from(fileList).map((file) =>
      this.readAsDataUrl(file)
    );
    const newImageUrls = await Promise.all(readFilePromises);
    this.imageUrls.push(...newImageUrls);
    this.onChange(this.imageUrls);
  }

  readAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () =>
        resolve(fileReader.result as string)
      );
      fileReader.addEventListener('error', () => {
        reject(fileReader.error);
      });
      fileReader.readAsDataURL(file);
    });
  }

  onClickRemoveButton(imageUrlIndex: number) {
    this.imageUrls.splice(imageUrlIndex, 1);
    this.onChange(this.imageUrls);
  }
}
