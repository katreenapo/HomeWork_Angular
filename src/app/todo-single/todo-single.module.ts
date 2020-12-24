import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoSingleRoutingModule } from './todo-single-routing.module';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {Component} from '@angular/core';




@NgModule({
  declarations: [TodoSingleComponent],
  imports: [
    CommonModule,
    TodoSingleRoutingModule,
    FormsModule,
    MatProgressBarModule,
    Component
  ]
})
export class TodoSingleModule { }
