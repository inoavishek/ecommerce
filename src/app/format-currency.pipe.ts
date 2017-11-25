import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, currency: String): any {
    let formatPrice:String="";
    formatPrice=currency+value;

    return formatPrice;
  }

}
