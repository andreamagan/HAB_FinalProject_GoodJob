import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePage } from './pages/welcome.page';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePage
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
