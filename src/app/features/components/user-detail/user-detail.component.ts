import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import * as fromActionsUser from 'src/app/features/store/user.actions';
import { UserState } from 'src/app/features/store/user.reducers';
import { ActivatedRoute, Params, Router, } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public userList: User[] = [];
  public isLoading = true;
  private subscriptions: Subscription[] = [];
  private id: string;
  public user:any;

  constructor(private store: Store<{ users: UserState }>,
              private router: Router,
              private route:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      if( params.has("idUser") ){
          this.id =  params.get("idUser");
          this.store.dispatch(fromActionsUser.FetchPending());
          this.store.subscribe( ({ users }) => {
          this.isLoading = users.pending;
          if(users.data && users.data.length) {
            this.user = users.data.find(item => item.id == this.id);    
            this.isLoading = false
          }
          else{
            this.router.navigate(["user"]);
          }
        })
      } 
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach( (s: Subscription) => s.unsubscribe() );
  }


}
