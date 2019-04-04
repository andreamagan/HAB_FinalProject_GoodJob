import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { JwtInterceptor } from 'src/app/shared/interceptors/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/shared/interceptors/error.interceptor';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from 'src/app/store/auth/auth.state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forFeature([AuthState])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  exports: [

  ]
})
export class AuthModule { }
