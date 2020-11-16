import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [{
    name: 'Завдання Angular Вступ',
    number: 'Task 1',
    isDone: true,
  }]
  addTask() {
    this.tasks.push({
      name: 'Завдання 2',
      number: 'Task 2',
      isDone: true,
    })
  }
}
