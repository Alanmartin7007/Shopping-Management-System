import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  //apiUrl = environment.baseApiUrl+ 'categories';
  apiUrl=`${environment.baseApiUrl}categories`;
  constructor(private client : HttpClient) { }
  getList(): Observable <Category[]>{
    return this.client.get<Category[]>(this.apiUrl);
  }
  getById(id:number):Observable<Category>{
    return this.client.get<Category>(this.apiUrl +'/'+id);
  }
  add(cat:Category):Observable<Category>{
    return this.client.post<Category>(this.apiUrl,cat);
  }
  update(p:Category):Observable<void>{
    return this.client.put<void>(this.apiUrl +'/'+p.id,p);
  }
}
