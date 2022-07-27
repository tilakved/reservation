import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dutchPrice'
})
export class DutchPricePipe implements PipeTransform {
  transform(value: any,digits=2) {
    const format = new Intl.NumberFormat('nl-NL', {
      minimumFractionDigits: digits,
    });
    value = format.format(parseFloat(parseFloat(value).toFixed(2)));
    value = value.toString().replace(".", "");
    // console.log(values);
    return value == '.' ? '0,00' : value;
      // return value.toString().replace(".", ",");

  }
}
