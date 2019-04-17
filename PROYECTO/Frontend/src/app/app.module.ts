import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ProfileModule } from './modules/profile/profile.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from './store/store.module';

import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { GlobalState } from './store/global.state';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false }),
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([GlobalState], {
      developmentMode: !environment.production
    }),
    AboutModule,
    AuthModule,
    HomeModule,
    JobsModule,
    ProfileModule,
    WelcomeModule,
    SharedModule,
    StoreModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
