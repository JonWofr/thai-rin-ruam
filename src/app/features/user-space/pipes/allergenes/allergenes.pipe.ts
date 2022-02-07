import { Pipe, PipeTransform } from '@angular/core';
import { Allergene } from 'src/app/shared/models/allergene.model';

@Pipe({
  name: 'allergenes',
})
export class AllergenesPipe implements PipeTransform {
  transform(allergenes: Allergene[]): string {
    return allergenes.map((allergene) => allergene.abbreviation).join(', ');
  }
}
