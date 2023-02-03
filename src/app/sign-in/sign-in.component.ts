import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { loginModel } from '../data/loginModel';
import { accountServices } from '../services/accountServices';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  issel:Boolean=false
  @ViewChild('f') userForm!:NgForm
  showError:boolean=false
  constructor(private accountServices:accountServices, private router:Router) { }

  ngOnInit(): void {
  }
  login(){

    var login = new loginModel
    login.Username=this.userForm.value["txtemail"]
    login.password=this.userForm.value["txtPassword"]
    this.issel=this.userForm.value["isSelected"]
    login.RememberMe=false
    this.accountServices.login(login).subscribe({
      next:data=>{
        window.localStorage.setItem("jwt", data.token);
        //window.location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=QzUwmXCSoEa9drLL8JmTzx6PqViQ9VlLsIKcrSOQ2RFUOTlUTTlCN1RVSkpOTjlBWDU0VTNGVTI5MC4u";
        localStorage.setItem("userName",login.Username)
        this.router.navigate(['/form'])
        this.showError=false
      },
      error:e=>{
        this.showError=true
        localStorage.setItem("userName","non")
      }
    })
  }
}
