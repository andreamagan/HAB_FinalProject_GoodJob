import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'esn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnDestroy {
  logo = faAirbnb;
  logotype = 'eSports Network';
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
