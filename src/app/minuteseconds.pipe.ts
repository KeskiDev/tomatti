import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {

      console.log(value);
       const minutes: number = Math.floor(value / 60);
       return minutes.toString().padStart(2, '0') + ':' +
           (value - minutes * 60).toString().padStart(2, '0');
    }
}
