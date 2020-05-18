import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Timer } from './Timer';
import { Observable,timer, onErrorResumeNext } from 'rxjs';
import {take,map} from 'rxjs/operators';
import { InputToCountdownDirective } from './inputToCountdown.directive';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  constructor(public d: InputToCountdownDirective) {}

  ngOnInit(): void {
  }



}
