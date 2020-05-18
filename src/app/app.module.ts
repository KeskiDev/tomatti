import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MinuteSecondsPipe } from './minuteseconds.pipe';
import { InputToCountdown } from './user-input/inputToCountdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    TodoListComponent,
    MinuteSecondsPipe,
    InputToCountdown
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
