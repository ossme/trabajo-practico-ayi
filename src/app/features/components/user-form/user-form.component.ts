import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from "@angular/forms";
import { Store } from '@ngrx/store';
import * as fromActionsUser from 'src/app/features/store/user.actions';
import { UserState } from '../../store/user.reducers';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public nombre: string = '';
  public password: string = '';
  private regForm:FormGroup;
  constructor(
    private store: Store<{ users: UserState }>
    ) { }

  ngOnInit(): void {
  }

  
  public createUser(nombre,telefono,mail){
    console.log(nombre);
    console.log(telefono);
    console.log(mail);

    this.store.dispatch(fromActionsUser.CreateData({texto:nombre}));


  }


}
