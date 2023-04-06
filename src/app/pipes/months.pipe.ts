import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'months',
})
export class MonthsPipe implements PipeTransform {
  transform(years: string | null, suffix: string = ''): string {
    return years ? String(Number(years) * 12).concat(' ' + suffix) : '';
  }
}
