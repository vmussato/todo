import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://5cfa67ebf26e8c00146d0756.mockapi.io/categories/'

  options = { observe: 'response' as 'body' };

  listObject = {
    "name": ""
  }

  getList(categoryId) {
    return this.http.get<HttpResponse<Object>>( `${environment.apiUrl}/categories/${categoryId}/lists`, this.options);
  }

  addList(categoryId, listTitle) {
    this.listObject.name = listTitle;
    return this.http.post<HttpResponse<Object>>( `${environment.apiUrl}/categories/${categoryId}/lists`, this.listObject, this.options);
  }
} 
