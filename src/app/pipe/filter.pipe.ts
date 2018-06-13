import { Pipe, PipeTransform } from '@angular/core';
import { LoginGuardService } from '../service/login-guard.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredText :string, status :string): any {
    console.log(filteredText);
    if (value.length == 0 || filteredText == "") {
      return value;
    }
    let resultArray = []
    for (let item of value) {
      if (item[status] == filteredText) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
