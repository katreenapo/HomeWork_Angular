import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoSingleRoutingModule } from './todo-single-routing.module';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';






@NgModule({
  declarations: [TodoSingleComponent],
  imports: [
    CommonModule,
    TodoSingleRoutingModule,
    FormsModule,
    MatProgressBarModule,
    MatFormFieldModule
    
  ]
})
export class TodoSingleModule { }
