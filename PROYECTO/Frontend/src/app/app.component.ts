import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { GlobalState } from './store/global.state';

@Component({
  selector: 'esn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eSports-network';
  @Select(GlobalState.isFetching) isFetching$;

  constructor() { }

  onClick(event) {
    console.log(event);
  }
}
