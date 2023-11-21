import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  form!:FormGroup; 
  constructor(private catService:CategoryService,private router:Router){} 
  ngOnInit(): void {
    //initialize the form
    this.form=new FormGroup({
      id: new FormControl(0),
      name:new FormControl('',Validators.required)
    })
  }
  submit(){
    console.log(this.form.value);
    this.catService.add(this.form.value).subscribe(result=>{
      alert('Added Succesfuly')
      //redirdect to Category List
      this.router.navigate(['/categories']);

    },err=>{
      alert('Error')
      console.log(err);
    })
  }
}
