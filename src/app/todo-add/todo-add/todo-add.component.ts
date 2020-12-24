import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  newTodo: FormGroup;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.newTodo = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      completed: ['']
    })
  }

}
