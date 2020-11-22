import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewText = '';
  changeView(view) {
console.log(view);
this.viewText = view;
  }
}