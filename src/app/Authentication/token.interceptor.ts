import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { Token } from '@angular/compiler';
 
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authSvc:AuthServiceService){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token=this.authSvc.getUser().token;
    console.log(token);
    if(token!=null){
      request=request.clone({
        setHeaders:{Authorization :`Bearer ${token}`}
      })
    }
       return next.handle(request);
  }
}
