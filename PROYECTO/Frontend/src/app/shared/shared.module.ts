import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SearchComponent } from './components/search/search.component';
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

@NgModule({
  declarations: [AvatarComponent, SearchComponent, TabsComponent, CardComponent, ListComponent, FormsComponent, FormControlComponent, ErrorComponent, PageNotFoundComponent, LayoutComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    StoreModule,
  ],
  exports: [AvatarComponent, SearchComponent, TabsComponent, CardComponent, ListComponent, FormsComponent, FormControlComponent, ErrorComponent, PageNotFoundComponent, LayoutComponent]
})
export class SharedModule { }
