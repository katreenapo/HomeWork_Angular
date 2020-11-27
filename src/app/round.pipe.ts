import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: Number, ...args: unknown[]): unknown {
    console.log (value,args );
    if(args.length > 0) {
      
    }
    return Math.round(value);
  }

}
