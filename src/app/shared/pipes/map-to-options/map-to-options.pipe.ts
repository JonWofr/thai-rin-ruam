import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '../../models/option.model';

@Pipe({
  name: 'mapToOptions',
})
export class MapToOptionsPipe implements PipeTransform {
  transform(objects: any[], valueKey: string, labelKey: string): Option[] {
    return objects.map<Option>((object) => ({
      value: object[valueKey],
      label: object[labelKey],
    }));
  }
}
