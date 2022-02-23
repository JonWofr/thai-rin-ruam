import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '../../models/option.model';

@Pipe({
  name: 'mapToOption',
})
export class MapToOptionPipe implements PipeTransform {
  transform(object: any, valueKey: string, labelKey: string): Option | null {
    if (object === null) return null;
    if (typeof object !== 'object') {
      throw new Error(`Can't use type ${typeof object} to map to type Option.`);
    }
    if (!(valueKey in object) || !(labelKey in object))
      throw new Error(
        `Key ${valueKey} and/or ${labelKey} does not exist in object ${object}. Mapping to type Option is not possible.`
      );
    return {
      value: object[valueKey],
      label: object[labelKey],
    };
  }
}
