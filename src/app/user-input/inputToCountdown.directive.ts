import { Directive } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector:'[appInputCountdown]'
})

export class InputToCountdownDirective{
  private state = new BehaviorSubject({
    seconds: 0,
    minutes:0,
    totalTime: 0
  });

  public obs$ = this.state.asObservable();

  updateState(value, command){
    let valToNumber = parseInt(value);
    if(valToNumber < 0) valToNumber = 0;

    let update = this.state.value;

    update.minutes = valToNumber;
    update.totalTime = this.calculateSeconds(update);
    this.state.next(update);
  }

  calculateSeconds(update){
    let totalTime = update.seconds;
    totalTime += update.minutes * 60;
    return totalTime;
  }

  getMinutes(){
    return this.state.value.minutes;
  }

  getSeconds(){
    return this.state.value.seconds;
  }

  getTotalSeconds(){
    return this.state.value.totalTime;
  }


}
