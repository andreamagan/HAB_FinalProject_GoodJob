import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { HomePage } from './page/home.page';
import { AuthGuard } from '../auth/services/auth.guard';
import { ProfilePage } from '../profile/page/profile.page';
import { JobDetailPage } from '../jobs/page/job-detail.page';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'profile',
        component: ProfilePage,
      },
      {
        path: 'team/:teamId/profile',
        component: ProfilePage,
      },
      // {
      //   path: 'my-account',
      //   //component: MyAccountComponent
      // },
      {
        path: 'job/:jobId',
        component: JobDetailPage,
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
