import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeW';

  nowDate = new Date();
  price = 100;


  users = [{
    name: 'User1',
    age: 20,
  }, {
    name: 'User2',
    age: 30,
  }]
  size = 325.4545454;
}
