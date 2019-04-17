
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser = this.store.selectSnapshot(state => state.auth);
    if (currentUser && currentUser.accesToken) {
      return true;
    }

    this.router.navigate(['/welcome']);
    return false;
  }


} 