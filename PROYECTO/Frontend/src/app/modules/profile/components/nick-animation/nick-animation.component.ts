import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esn-nickanimation',
  templateUrl: './nick-animation.component.html',
  styleUrls: ['./nick-animation.component.scss']
})
export class NickAnimationComponent {
  @Input() nick;

  constructor() { }

}
