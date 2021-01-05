import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@demo-app/auth'
import { User } from '@demo-app/data-models'
import { Store } from '@ngrx/store';
import {AuthState, getUser} from '@demo-app/auth'
// import { productsQuery} from '@demo-app/auth'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  // constructor(private authService: AuthService) { }
  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
    // this.user$ = this.authService.user$
    this.user$ = this.store.select(getUser)
  }

}
