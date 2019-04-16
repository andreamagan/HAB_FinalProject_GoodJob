import { Component, OnInit } from '@angular/core';
import { Store, ofAction, Actions } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register, RegisterSuccess } from 'src/app/store/auth/auth.actions';


@Component({
  selector: 'esn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  roleTypes = [
    'player',
    'team',
  ]

  registerForm = this.fb.group(
    {
      floatLabel: 'auto',
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      updateOn: 'blur',
      //validators: [MatchPasswordValidator] 
    }
  );


  constructor(private fb: FormBuilder, private store: Store, private actions$: Actions) { }

  ngOnInit() {
    this.actions$
      .pipe(ofAction(RegisterSuccess))
      .subscribe(() => this.registerForm.reset());
  }

  register() {
    if (!this.registerForm.valid) {
      this.markFormGroupAsTouched(this.registerForm);
      return;
    }
    this.store.dispatch(new Register(this.registerForm.value));
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => control.markAsTouched());
  }
}
