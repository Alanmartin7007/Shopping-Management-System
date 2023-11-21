import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit{
   
  constructor(private catService:CategoryService,private router:Router,private route:ActivatedRoute){}
  list :Category[]=[]; 
  categoryId:number=0;
  form!:FormGroup;
  category1!:Category;
  ngOnInit(): void {
    //initialize the form
    
    this.categoryId=this.route.snapshot.params['id'];
      console.log('product id '+this.categoryId);
      this.form=new FormGroup({
        
          id: new FormControl(0),
          name:new FormControl('',Validators.required)
      })
      this.catService.getById(this.categoryId).subscribe(p=>{
        console.log(p);
        this.category1=p;
        this.form.setValue({
          id:this.category1.id,
          name : this.category1.name,
         
    
        });
      },err=>{
        alert('error');
        console.log(err);
      })

  }
  submit() {
    this.catService.update(this.form.value).subscribe(()=>
      {
        alert('Updated Successfully');
        //navigate to product lsit
        this.router.navigate(['/categories']);

      },err=>{
        console.log(err);
        alert('error');
      })
    }
    }

