import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [ {
    name: 'Завдання Angular Вступ',
    number: 'Task 1',
    isDone: true,
  }]
  
}