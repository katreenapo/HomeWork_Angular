import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/service/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    urlAPI = environment.urlAPI; 

  constructor(
    private http: HttpClient
  ) { }
getAllTodo (): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.urlAPI);
    
  }

getTodoById(id:number) {
  return this.http.get<Todo>(`https://5fe21a3b7a94870017682086.mockapi.io/Todo/${id}`);

}
addNewTodo(todo: Todo): Observable<any> {
  return this.http.post(this.urlAPI, todo);
}
deleteTodo(id: number): Observable<any>{
  return this.http.delete<Todo>(`https://5fe21a3b7a94870017682086.mockapi.io/Todo/${id}`);
}
editTodo(todo: Todo, id: number): Observable<Todo> {
  return this.http.put<Todo>(`${this.urlAPI}${id}`, todo);
}
}

