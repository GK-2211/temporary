import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router, private dataservice : DataserviceService, private dialog : MatDialog) { }

  ngOnInit(): void {
  }
  email="";
  password="";
  passwordr="";
  phonenumber="";
  lname="";
  fname=""
  result=[];
  signup(){
    var result : number;
    const signupData={
      email : this.email,
      password : this.password,
      phonenumber : this.phonenumber,
      name : this.fname + " " + this.lname
     }

    if(this.fname=="" || this.lname=="" || this.email == "" || this.phonenumber == "" || this.password== "" || this.passwordr == "" || this.password != this.passwordr)
    this.dialog.open(PopUpComponent);

     else{
      this.dataservice.getUser(signupData.email)
      .subscribe((res : any)=>{
        console.log(res);
        //this.result=this.result + res.length;
        this.result = res;
        console.log(this.result.length);
         

        if(this.result.length){
          console.log("User exists");
          //this.router.navigateByUrl("sign-up");
          this.dialog.open(PopUpComponent); 
       }
       else{
           
        //    console.log(result)
           this.dataservice.createUser(signupData)
            .subscribe((res : any)=>{
              console.log(res);
            })  
            this.router.navigateByUrl("login");

        }
     })

    }

         
         
        
        
    
     
    
  }
  }

