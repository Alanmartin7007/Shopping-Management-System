import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!:FormGroup;
  constructor(private authService:AuthServiceService,private router:Router){}
  ngOnInit(): void {
    this.form=new FormGroup({
      
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required),
      
  
    
    })
  }
  
  submit() {
    this.authService.login(this.form.value).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/products']);      
  
  
    },err=>{
      console.log(err);
      alert('error');
    })
  
  }
  }
  

