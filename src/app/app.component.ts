import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  formType: string = 'registration';
  
  login = {
    userName: '',
    password: ''
  }
  sendProduct() {
    console.log(this.login);
    
  }
  changeForm(type: string) {
    this.formType = type;
  }
  onLogin() {
    console.log(this.login);
  }

  onRegistration() {
    
  }
}
