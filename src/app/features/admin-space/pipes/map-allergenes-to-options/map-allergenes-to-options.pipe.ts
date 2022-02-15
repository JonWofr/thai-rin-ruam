import { Pipe, PipeTransform } from '@angular/core';
import { Allergene } from 'src/app/shared/models/allergene.model';
import { Option } from '../../models/option.model';

@Pipe({
  name: 'mapAllergenesToOptions',
})
export class MapAllergenesToOptionsPipe implements PipeTransform {
  transform(allergenes: Allergene[]): Option[] {
    console.log('transforming input', allergenes);
    return allergenes.map<Option>((allergene) => ({
      label: allergene.abbreviation,
      value: allergene.id,
    }));
  }
}
