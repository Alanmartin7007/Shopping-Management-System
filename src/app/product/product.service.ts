import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getList():Observable<products[]> {
    return this.client.get<products[]>(this.apiUrl);
  }
  add(p:products):Observable<products>{
    return this.client.post<products>(this.apiUrl,p);
  }
  
  
  apiUrl=`${environment.baseApiUrl}products`;
  constructor(private client:HttpClient) { }
  delete(id:number):Observable<void>{
    return this.client.delete<void>(this.apiUrl +'/'+id);

  }
  getById(id:number):Observable<products>{
    return this.client.get<products>(this.apiUrl +'/'+id);
  }
  update(p:products):Observable<void>{
    return this.client.put<void>(this.apiUrl +'/'+p.id,p);
  }

}