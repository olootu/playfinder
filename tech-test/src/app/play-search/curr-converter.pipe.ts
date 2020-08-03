import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'converter' })
export class curconvertPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // currency rate
        let rates = 1.13;

        // Apply and return the formula ( Rate of (currency in which we need to convert) / Rate of currency ) * number of units 
        return ((rates / 1) * value).toFixed(2);
    }
}