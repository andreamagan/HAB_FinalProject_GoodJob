import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetPlayerProfile } from 'src/app/store/player/player.actions';

@Component({
  selector: 'esn-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetPlayerProfile());
  }
}