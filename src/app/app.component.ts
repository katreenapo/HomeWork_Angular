import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm = {
    userName: '',
    password: ''
  }
  sendProduct() {
    console.log(this.loginForm);
    
  }
}
