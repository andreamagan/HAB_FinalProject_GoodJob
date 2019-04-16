import { Component } from '@angular/core';
import { Register } from 'src/app/store/auth/auth.actions';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'esn-auth-forms',
  templateUrl: './auth-forms.component.html',
  styleUrls: ['./auth-forms.component.scss']
})
export class AuthFormsComponent {
  isLoginFormVisible = true;
  title = "Login";
  redirect = "Sing up";
  role = "player";
  toggleForm(isLoginClick: boolean) {
    if (
      (isLoginClick && this.isLoginFormVisible) ||
      (!isLoginClick && !this.isLoginFormVisible)
    ) {
      return;
    }

    this.isLoginFormVisible = !this.isLoginFormVisible;
    if (this.isLoginFormVisible) {
      this.title = "Login";
      this.redirect = "Sing up";
    } else {
      this.title = "Sing up for free";
      this.redirect = "Login";
    }
  }

  checkRole(isPlayerClick: boolean) {
    if (isPlayerClick !== true) {
      return this.role = "player";
    }
    return this.role = "team";
  }
}
