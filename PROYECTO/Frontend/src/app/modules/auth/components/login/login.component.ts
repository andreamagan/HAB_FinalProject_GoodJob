import { Component } from '@angular/core';
import { Login } from '../../../../store/auth/auth.actions';
import { Store } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'esn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  roleTypes = [
    'player',
    'team',
  ]

  loginForm = this.fb.group(
    {
      floatLabel: 'auto',
      role: ['', [Validators.required]],
      email: ['', [Validators.required]], //TODO: Validatos
      password: ['', [Validators.required]]
    },
    { updateOn: 'blur' }
  );


  constructor(private fb: FormBuilder, private store: Store) { }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(this.loginForm.value))
    }
  }
}

