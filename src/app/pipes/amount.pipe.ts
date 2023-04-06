import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount',
})
export class AmountPipe implements PipeTransform {
  transform(amount: string | number | null): number | string {
    const value = Number(amount) / 1000;
    return parseFloat(String(value)).toFixed(3);
  }
}
