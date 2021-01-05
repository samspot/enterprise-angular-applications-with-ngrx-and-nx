import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AuthState } from '@demo-app/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // return this.authService.user$.pipe(
    return this.store.pipe(select((state) => state.auth.user),
      map(user => {
        if(user){
          return true;
        } else {
          this.router.navigate(['/auth/login'])
          return false;
        }
      })
    )
  }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  // }

}
