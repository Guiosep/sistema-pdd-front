import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToCharacter'
})
export class NullToCharacterPipe implements PipeTransform {

  transform(value: any): string {
    return (value != null) ? '-' : '-' ;
  }

}
