import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  public login(user,pass): void {
    console.log('User '+user + ' pass '+pass )
    if(user && pass){
      if(user== 'test' && pass == 'Ayi+2020'){
        console.log('se loggeo ');
      }
    }
    // this.router.navigate(['/home']);
  }
}
