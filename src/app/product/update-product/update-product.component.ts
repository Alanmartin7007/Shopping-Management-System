import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { products } from '../products';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  list :Category[]=[];

  productId:number=0;
  product1!:products;
  form!:FormGroup;

  constructor( private route:ActivatedRoute,private productservice:ProductService,
    private catService:CategoryService,private dtPipe :DatePipe,private router:Router){}
  ngOnInit(): void {
   
      this.productId=this.route.snapshot.params['id'];
      console.log('product id '+this.productId);
      this.form=new FormGroup({
        id: new FormControl(0),
        name:new FormControl('',Validators.required),
        price:new FormControl(null,[Validators.min(1),Validators.required]),
        categoryId:new FormControl(null,Validators.required),
        manufacturedDate:new FormControl(''),
        imageUrl:new FormControl('',Validators.required)
  
      
      })
      this.catService.getList().subscribe(result=>
        {
          console.log(result);
          this.list=result;
    
        },err=>{
          alert(err);
        }),
      //service method
      this.productservice.getById(this.productId).subscribe(p=>{
        console.log(p);
        this.product1=p;
        this.form.setValue({
          id:this.product1.id,
          name : this.product1.name,
          price:this.product1.price,
          categoryId:this.product1.categoryId,
          manufacturedDate: this.dtPipe.transform(this.product1.manufacturedDate,'yyyy-MM-dd'),
          imageUrl:this.product1.imageUrl
    
        });
      },err=>{
        alert('error');
        console.log(err);
      })
    
    
  }
  submit() {
      this.productservice.update(this.form.value).subscribe(()=>
      {
        alert('Updated Successfully');
        //navigate to product lsit
        this.router.navigate(['/products']);

      },err=>{
        console.log(err);
        alert('error');
      })
    }
}
