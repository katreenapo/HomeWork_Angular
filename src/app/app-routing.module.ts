import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'todo', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule) 
}, {
  path: 'todo/:id', loadChildren: () => import('./todo-single/todo-single.module').then(m => m.TodoSingleModule) 
},{
  path: 'todo/add', loadChildren: () => import('./todo-add/todo-add.module').then(m => m.TodoAddModule)
}, {
  path: '',  redirectTo: 'todo', pathMatch: 'full'
}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
