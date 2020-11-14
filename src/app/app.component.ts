import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeW';
  
  tasks = [{
    name: '24. Angular. Вступ',
    isDone: true,
    i: 1,
  }]
  addTask() {
    this.tasks.push({
      name: '24. Angular.',
      isDone: true,
      i: 3,
    });
    
  }
}
