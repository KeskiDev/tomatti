import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Timer } from './Timer';
import { Observable,timer, onErrorResumeNext } from 'rxjs';
import {take,map} from 'rxjs/operators';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  timerForm: FormGroup;
  timerClass = new Timer();
  timerRunning = false;
  showTheClock = false;
  theTime = 0;
  interval;

  constructor() {}

  ngOnInit(): void {
    this.timerForm = new FormGroup({
      sessionTimer: new FormControl()
    });
  }

  startTimer(){
    this.theTime =this.timerForm.value.sessionTimer * 60;

    this.timerForm.setValue({sessionTimer:null})

    this.showTheClock = true;
    this.timerRunning = true;
    clearInterval(this.interval);

    this.runTimer();
  }

  addTime(mintues):void{
    this.theTime = mintues * 60;
    this.showTheClock = true;
    this.timerRunning = true;
    clearInterval(this.interval);
    this.runTimer();
  }

  runTimer(): void{
    this.interval = setInterval(() => {
      if(this.theTime > 0){
          this.theTime--;
      }
      else if(this.theTime <= 0 && this.timerRunning){
        clearInterval(this.interval);
        this.allDone();
        this.theTime = 0;
        this.timerRunning = false;
      }
    }, 1000);
  }

  stopTimer():void{
    this.theTime = 0;
    this.timerRunning = false;
  }

  allDone():void{
    let doneAudio =new Audio();
    doneAudio.src = "../assets/audio/allDone.wav";
    doneAudio.load();
    doneAudio.play();
  }

}
