import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://5cfa67ebf26e8c00146d0756.mockapi.io/categories/'

  options = { observe: 'response' as 'body' };

  taskObject = {
    "name": "",
    "done": false
  }

  getTasks(categoryId, listId) {
    return this.http.get<HttpResponse<Object>>( `${environment.apiUrl}/categories/${categoryId}/lists/${listId}/items`, this.options);
  }

  addtask(categoryId, listId, taskTitle) {
    this.taskObject.name = taskTitle;
    return this.http.post<HttpResponse<Object>>( `${environment.apiUrl}/categories/${categoryId}/lists/${listId}/items`, this.taskObject, this.options);
  }
} 