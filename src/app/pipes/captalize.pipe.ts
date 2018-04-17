import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalize'
})
export class CaptalizePipe implements PipeTransform {

  transform(value: any, words?: any): any {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
