import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/service/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-single',
  templateUrl: './todo-single.component.html',
  styleUrls: ['./todo-single.component.scss']
})
export class TodoSingleComponent implements OnInit {

  todo: Todo

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private  router: Router,
  ) { }
    


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getPostById(id).subscribe((res: Todo)=>{
      this.todo = res;
    })
  }
  allTodos() {
    this.router.navigate(['todo']);
  }
}
  

  


