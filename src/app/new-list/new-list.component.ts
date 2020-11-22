import { Component, OnInit } from '@angular/core';
import { Task } from '../new-list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  task: Task[] =[{
    id:1,
    name: 'task 2',
    status: true,
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
