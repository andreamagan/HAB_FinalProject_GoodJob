import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Input } from '@angular/core';
import { faLinkedin, faGithub, faBehance, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Store, Select } from '@ngxs/store';
import { Logout } from 'src/app/store/auth/auth.actions';
import { GetPlayerProfile } from 'src/app/store/player/player.actions';
import { PlayerState } from 'src/app/store/player/player.state';
import { Observable } from 'rxjs';
import { Player } from '../models/player.models';



@Component({
  selector: 'esn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  // @Select(PlayerState) player$: Observable<Player>;
  // name = "";
  // nickName = "";

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

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logoutUser() {
    this.store.dispatch(new Logout());
  }



}
