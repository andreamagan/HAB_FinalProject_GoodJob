import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'esn-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() job;

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
