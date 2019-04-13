import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { AuthModule } from '../auth/auth.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthFormsComponent } from './components/auth-forms/auth-forms.component';



@NgModule({
  declarations: [WelcomeComponent, AuthFormsComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    AuthModule,
    SharedModule,
  ]
})
export class WelcomeModule { }
