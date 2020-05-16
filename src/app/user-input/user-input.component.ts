import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Timer } from './Timer';
import { Observable,timer } from 'rxjs';
import {take,map} from 'rxjs/operators';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  timerForm: FormGroup;
  timerClass = new Timer();
  minutesToFocus$: Observable<number>;
  secondsToFocus$: Observable<number>
  timerRunning = false;
  theTime = 0;

  constructor() {}

  ngOnInit(): void {
    this.timerForm = new FormGroup({
      sessionTimer: new FormControl()
    });

  }

  startTimer(){
    this.theTime =this.timerForm.value.sessionTimer * 60;


    //this.theTime = this.timerForm.value.sessionTimer - 1;
    this.timerForm.setValue({sessionTimer:null})

    this.timerRunning = true;

    this.runTimer();
  }

  runTimer(): void{



    this.minutesToFocus$ = timer(0,1000).pipe(
      take(this.theTime),
      map(() => this.theTime == 0 ? 0 : this.theTime--)
    );
  }

}
