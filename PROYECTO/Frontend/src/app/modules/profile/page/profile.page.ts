import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/store/auth/auth.state';
import { Auth } from 'src/app/shared/models/auth.models';


@Component({
  selector: 'esn-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage {
  @Select(AuthState) auth$: Observable<Auth>;


  constructor(private store: Store, ) {

  }

}
