import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { JwtInterceptor } from 'src/app/shared/interceptors/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/shared/interceptors/error.interceptor';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from 'src/app/store/auth/auth.state';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from 'src/app/store/store.module';
import { MaterialModule } from 'src/app/material/material.module';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule,
    HttpClientModule,
    MaterialModule,
    NgxsModule.forFeature([AuthState])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
