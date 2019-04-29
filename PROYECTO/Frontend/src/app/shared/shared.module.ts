import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormControlComponent } from './components/forms/form-control.component';
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '../store/store.module';
import { ClickPreventDefaultDirective } from './directives/click-prevent-default.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { TagsComponent } from './components/tags/tags.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    AvatarComponent,
    TabsComponent,
    CardComponent,
    ListComponent,
    FormsComponent,
    FormControlComponent,
    ErrorComponent,
    PageNotFoundComponent,
    LayoutComponent,
    ClickPreventDefaultDirective,
    LoaderComponent,
    TagsComponent,
    JobCardComponent,
    PlayerCardComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    StoreModule,
  ],
  exports: [
    AvatarComponent,
    TabsComponent,
    CardComponent,
    ListComponent,
    FormsComponent,
    FormControlComponent,
    ErrorComponent,
    PageNotFoundComponent,
    LayoutComponent,
    ClickPreventDefaultDirective,
    LoaderComponent,
    TagsComponent,
    JobCardComponent,
    PlayerCardComponent,

  ]
})
export class SharedModule { }
