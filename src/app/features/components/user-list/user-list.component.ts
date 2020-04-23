import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromActionsUser from 'src/app/features/store/user.actions';
import { UserState } from 'src/app/features/store/user.reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public userList: User[] = [];
  public isLoading = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<{ users: UserState }>,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActionsUser.FetchPending());
    this.store.subscribe( ({ users }) => {
      this.isLoading = users.pending;
      if(users.data && users.data.length) {

        this.formatTodos(users.data);
      }
    })
  }

  formatTodos(users: any) {
    debugger;
    this.userList = users.map(user => {
      return { 
        id:       user.id,
        name:     user.name,
        username: user.username,
        email:     user.email,
        phone:    user.phone,
        website:  user.website,
        company:  {
          bs:user['company'].bs,
          catchPhrase:user['company'].catchPhrase,
          name:user['company'].name
        },
        address: {
          city:user['address'].city,
          street:user['address'].street,
          suite:user['address'].suite,
          zipcode:user['address'].zipcode,
        },  
        description: 'This is description',
        completed: user.completed
      }
    });
  }

  verDetalles(idUsuario){
    this.router.navigate(["user-detail/",idUsuario]);
  }

  renderTodos() {
    this.isLoading = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach( (s: Subscription) => s.unsubscribe() );
  }

}
