import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public validUser: boolean = true;
  public validPass: boolean = true;
  public aa:boolean=false
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  guardarLocalStorage(loggd){
    if(loggd){
      localStorage.setItem('loggeado','si');
    }else{
      localStorage.setItem('loggeado','si');
    }
    
  }

  public login(loginForm:NgForm): void {
    console.log("submit disparado");
    console.log(loginForm);
    console.log(loginForm.controls.user.value);
    console.log(loginForm.controls.password.value);
    console.log(loginForm.invalid);

    if(loginForm.controls.user.value === 'test'){
        this.validUser = true;
    }
    else{
      this.validUser = false;
    }
    if(loginForm.controls.password.value === 'Ayi+2020'){
      this.validPass = true;     
     }else{
      this.validPass = false;
     }

     if(this.validUser && this.validPass){
       const logged = true;
       this.guardarLocalStorage(logged);
        this.router.navigate(['/user']);
     }
  }
}
