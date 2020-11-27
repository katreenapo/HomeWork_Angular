import { Component } from '@angular/core';
import { Task } from './new-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task: Task[] = [{
    id: 1,
    name: 'task 2',
    status: true,
  }]
  addTask() {
    this.task.push({
      id: 2,
      name: 'task 3',
      status: true,
    })
  }
}
