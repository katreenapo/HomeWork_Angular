import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task = '';
  tasks =[];

    addTask() {
      console.log(this.tasks.push(this.task));
  

  }
}
