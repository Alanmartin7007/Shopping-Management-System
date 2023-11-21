import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { DatePipe } from '@angular/common';
import { UpdateCategoriesComponent } from './category/update-categories/update-categories.component';
import { TokenInterceptor } from './Authentication/token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    LoginComponent,
    RegisterComponent,
    UpdateCategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
