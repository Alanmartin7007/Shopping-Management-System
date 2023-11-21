import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { products } from '../products';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form!:FormGroup;
products: any;
  constructor(private proService:ProductService,private router:Router,private CatService:CategoryService){}
  list :Category[]=[];

  ngOnInit(): void {
    this.CatService.getList().subscribe(result=>
      {
        console.log(result);
        this.list=result;
  
      },err=>{
        alert(err);
      }),

    this.form=new FormGroup({
      id: new FormControl(0),
      name:new FormControl('',Validators.required),
      price:new FormControl(null,[Validators.min(1),Validators.required]),
      categoryId:new FormControl('',Validators.required),
      manufacturedDate:new FormControl('',Validators.required),
      imageUrl:new FormControl('')

    
    })  }
    
    
submit(){
    console.log(this.form.value);
    this.proService.add(this.form.value).subscribe(result=>{
      alert('Added Succesfuly')
      //redirdect to Category List
      this.router.navigate(['/products']);

    },err=>{
      alert('Error')
      console.log(err);
    })
}
}
