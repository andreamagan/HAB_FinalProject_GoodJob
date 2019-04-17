import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Input } from '@angular/core';
import { faLinkedin, faGithub, faBehance, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/store/auth/auth.actions';



@Component({
  selector: 'esn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnDestroy {
  @Input() player;

  logotype = 'eSports Network';
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  name = 'Andrea';
  nickName = 'AMR';

  networks = [
    { id: 1, icon: faLinkedin, link: 'https://www.linkedin.com/in/andreamaganrey/' },
    { id: 2, icon: faGithub, link: 'https://github.com/andreamagan' },
    { id: 3, icon: faBehance, link: 'Keep in touch' },
    { id: 4, icon: faTwitter, link: 'Keep in touch' }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private store: Store) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logoutUser() {
    this.store.dispatch(new Logout());
  }



}
