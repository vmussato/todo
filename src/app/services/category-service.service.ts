import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://5cfa67ebf26e8c00146d0756.mockapi.io/categories/'

  options = { observe: 'response' as 'body' };

  getCategories(): Observable<HttpResponse<Object>> {
    return this.http.get<HttpResponse<Object>>( `${environment.apiUrl}/categories`, this.options);
  }

  getCategory(id) {

  }

  addCategory(category) {

  }

  editCategory(id) {

  }

  removeCategory(id) {

  }
}
