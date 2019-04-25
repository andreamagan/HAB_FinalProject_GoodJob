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

  twitterIcon = faTwitter;
  twitchIcon = faTwitch;
  webIcon = faGlobeAmericas;
  //   icon: faInstagram, link: social.instagramUrl
  //  icon: faTwitter, link: social.twitterUrl 
  // icon: faGlobeAmericas, link: social.webUrl 
}
