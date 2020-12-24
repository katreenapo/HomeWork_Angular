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

  getPostById(id:number) {
    return this.http.get<Todo>(`https://5fe21a3b7a94870017682086.mockapi.io/Todo/${id}`);

}
}

