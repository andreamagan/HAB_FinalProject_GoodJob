import { Component, Input } from '@angular/core';
import { faTwitch, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'esn-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  @Input() social;

  networks = [
    { id: 1, icon: faTwitch, link: this.social.twitchUrl },
    { id: 2, icon: faInstagram, link: this.social.instagramUrl },
    { id: 3, icon: faTwitter, link: this.social.twitterUrl },
    { id: 4, icon: faGlobeAmericas, link: this.social.webUrl }
  ];
}
