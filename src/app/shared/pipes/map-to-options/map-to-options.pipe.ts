import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '../../models/option.model';

@Pipe({
  name: 'mapToOptions',
})
export class MapToOptionsPipe implements PipeTransform {
  transform(objects: any[], valueKey: string, labelKey: string): Option[] {
    if (typeof objects !== 'object' || !Array.isArray(objects)) {
      throw new Error(
        `Can't use type ${typeof objects}. An Array should be provided.`
      );
    }

    return objects.map<Option>((object) => {
      if (typeof object !== 'object') {
        throw new Error(
          `Can't use type ${typeof object} to map to type Option.`
        );
      }
      if (!(valueKey in object) || !(labelKey in object))
        throw new Error(
          `Key ${valueKey} and/or ${labelKey} does not exist in object ${object}. Mapping to type Option is not possible.`
        );
      return {
        value: object[valueKey],
        label: object[labelKey],
      };
    });
  }
}
