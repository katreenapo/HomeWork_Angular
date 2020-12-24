import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddRoutingModule } from './todo-add-routing.module';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [TodoAddComponent],
  imports: [
    CommonModule,
    TodoAddRoutingModule,
    ReactiveFormsModule,
    MatInputModule
    
  ]
})
export class TodoAddModule { }
