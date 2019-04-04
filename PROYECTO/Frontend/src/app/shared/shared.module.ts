import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SearchComponent } from './components/search/search.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { FormsComponent } from './components/forms/forms.component';
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { NavComponent } from './layout/components/nav/nav.component';


@NgModule({
  declarations: [AvatarComponent, SearchComponent, TabsComponent, CardComponent, ListComponent, FormsComponent, ErrorComponent, PageNotFoundComponent, LayoutComponent, HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],

})
export class SharedModule { }
