import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    task: Task[] =[{
    id:1,
    name: 'task 2',
    status: true,
  }]
  addTask() {
    this.task.push({
      name: 'Завдання 2',
      number: 'Task 2',
      isDone: true,
    })
  }
}
