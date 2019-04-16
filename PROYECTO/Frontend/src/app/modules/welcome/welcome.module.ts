import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { AuthModule } from '../auth/auth.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomePage } from './pages/welcome.page';
import { AuthFormsComponent } from './components/auth-forms/auth-forms.component';



@NgModule({
  declarations: [WelcomePage, AuthFormsComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    AuthModule,
    SharedModule,
  ]
})
export class WelcomeModule { }
