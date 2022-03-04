import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private viewportscroller : ViewportScroller , private dataservice : DataserviceService) { }
  email ='';
  password = '';
  result=[];
  ngOnInit(): void {
  }
  onClick(id : string){
    this.viewportscroller.scrollToAnchor(id);
  }
  login(){
    var result : number;
    const loginData={
      email : this.email,
      password : this.password,
    }

    if(this.email == ""|| this.password== "")
     //this.router.navigateByUrl("login");
     console.log("No email or password")

     else{
      this.dataservice.getUser(loginData.email)
      .subscribe((res : any)=>{
        console.log(res);
        //this.result=this.result + res.length;
        this.result = res;
        console.log(this.result.length);
         

        if(this.result.length < 1 || res[0].password != loginData.password){
          console.log("User don't exist");
         // this.router.navigateByUrl("login"); 
        // this.dialog.open(PopupLoginComponent);
         
       }
       else{
        //this.dataservice.getToaster();
        console.log("User exists");
        //this.router.navigateByUrl("profile"); 
        //this.dataservice.dataService=loginData.email;
        }
     })

    }

         
         
        
        
    
     
    
  }
}
