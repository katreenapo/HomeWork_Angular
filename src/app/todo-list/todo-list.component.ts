import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  
  constructor() {  }
  items: any[] = [];
  newTask: string;
  taskIsDone = false;

  addToList() {
    if (this.newTask == '') {
    }
    else {
      this.items.push({name:this.newTask,
        taskIsDone: false
      });
      this.newTask = '';
      this.taskIsDone = false;
      }
      console.log(this.items);
    }
    taskStatus() {
      this.taskIsDone != this.taskIsDone;
    }

  deleteTask(index: number) {
    this.items.splice(index, 1);
  }

  successful() {
    
  }

  ngOnInit(): void {
  }

}
