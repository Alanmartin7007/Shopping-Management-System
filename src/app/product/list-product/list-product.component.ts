import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list :products[]=[];
  private  productid=0; 
  constructor(private ProService:ProductService){}
  ngOnInit(): void {
   this.ProService.getList().subscribe(result=>
    {
      console.log(result);
      this.list=result;

    },err=>{
      alert(err);
    })
  }
    delete(){
      console.log('product to delete:'+ this.productid);
      this.ProService.delete(this.productid).subscribe(()=>{
        alert('delete successful');
        this.ngOnInit();
      },err=>{
        console.log(err);
        alert('error');
      })
    }
    setProductId(id: number){
      this.productid=id;
    }  
}
