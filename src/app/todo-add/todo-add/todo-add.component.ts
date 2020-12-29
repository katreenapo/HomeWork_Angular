import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  newTodo: FormGroup;
  minDate = new Date();

  constructor(
    private fb:FormBuilder,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.newTodo = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      completed: ['']
    });
  }

  addTodo() {
    console.log(this.newTodo.value);
    this.data.addNewTodo(this.newTodo.value).subscribe((res) => {
      console.log(res);
    });
  }

}