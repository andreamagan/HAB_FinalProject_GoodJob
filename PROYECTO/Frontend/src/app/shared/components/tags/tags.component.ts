import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esn-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tag;
  constructor() { }

  ngOnInit() {
  }

}
