import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/service/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
  }
  deleteThisTodo() {
   
      
  }
}
