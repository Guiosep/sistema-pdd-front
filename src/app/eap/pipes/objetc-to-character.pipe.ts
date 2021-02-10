import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objetcToCharacter'
})
export class ObjetcToCharacterPipe implements PipeTransform {

  transform(value: any): string {
    return (value != null) ? '-' : '-' ;
  }

}
