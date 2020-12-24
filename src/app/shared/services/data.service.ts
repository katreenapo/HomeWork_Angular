import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/service/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getPostById(id: number) {
    throw new Error('Method not implemented.');
  }
  urlAPI = environment.urlAPI; 

  constructor(
    private http: HttpClient
  ) { }
getAllTodo (): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.urlAPI);
    
  }
}


