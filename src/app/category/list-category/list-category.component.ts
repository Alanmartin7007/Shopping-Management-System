import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
 list:Category[]=[];

 private categoryid=0;
 constructor(private categoryService: CategoryService){


 }
  ngOnInit(): void {
    this.categoryService.getList().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
      alert(err);
    })
    }
    setProductId(id: number){
      this.categoryid=id;
    } 

}       
