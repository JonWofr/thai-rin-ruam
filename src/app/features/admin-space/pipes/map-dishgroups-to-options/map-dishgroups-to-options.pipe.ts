import { Pipe, PipeTransform } from '@angular/core';
import { DishGroup } from 'src/app/shared/models/dish-group.model';
import { Option } from '../../models/option.model';

@Pipe({
  name: 'mapDishgroupsToOptions',
})
export class MapDishgroupsToOptionsPipe implements PipeTransform {
  transform(dishGroups: DishGroup[]): Option[] {
    return dishGroups.map<Option>((dishGroup) => ({
      value: dishGroup.id,
      label: dishGroup.name,
    }));
  }
}
