import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form!:FormGroup;
constructor(private authService:AuthServiceService,private router:Router){}
ngOnInit(): void {
  this.form=new FormGroup({
    
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    dateofbirth:new FormControl('',Validators.required),
    role:new FormControl(1,Validators.required)

  
  })
}

submit() {
  this.authService.register(this.form.value).subscribe(result=>{
    console.log(result);
    this.router.navigate(['/login']);


  },err=>{
    console.log(err);
    alert('error');
  })

}
}
