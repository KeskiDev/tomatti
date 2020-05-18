import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todoList: String[] = [];
  TODOForm: FormGroup;
  todoItemNumber = 0;

  constructor() { }

  ngOnInit(): void {
    this.TODOForm = new FormGroup({
      inputTODO: new FormControl()
    })
  }

  clearToDos():void{
    //get all the current todos and just clear them out
    this.todoList = [];
  }

  addToDo(): void{
    this.todoList.push(this.TODOForm.value.inputTODO);
    this.TODOForm.setValue({inputTODO:null});
  }

  markDone(todoName): void{
    var index = this.todoList.indexOf(todoName);
    this.todoList.splice(index,1);
  }

}
