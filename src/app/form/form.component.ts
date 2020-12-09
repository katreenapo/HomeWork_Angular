import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
@Output () 
  formRegister: FormGroup;
  show = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      userName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]],
      confirmPass: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]]

    });
  }
  formType: string = 'registration';

  login = {
    email: '',
    password: ''
  }

  get f() {
    return this.formRegister.controls;
  }


}