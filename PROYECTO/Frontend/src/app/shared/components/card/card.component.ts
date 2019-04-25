import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() job;

  constructor() { }

  ngOnInit() {
  }

}
