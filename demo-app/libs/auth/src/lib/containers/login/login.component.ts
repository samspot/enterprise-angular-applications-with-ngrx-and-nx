import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService} from './../../services/auth/auth.service';
import { Authenticate } from '@demo-app/data-models';
import { AuthState } from './../../+state/auth.reducer';
import { Store } from '@ngrx/store';
import * as authActions from './../../+state/auth.actions';

// demo-app/apps/customer-portal/src/app/services/auth/auth.service.ts
// demo-app/libs/auth/src/lib/containers/login

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
  }

  login(authenticate: Authenticate) {
    // this.authService.login(authenticate).subscribe();
    this.store.dispatch(login({payload: authenticate}))
  }

}
