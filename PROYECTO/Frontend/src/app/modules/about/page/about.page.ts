import { Component } from '@angular/core';

@Component({
  selector: 'esn-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage {

  networks = [
    { id: 1, name: 'LinkedIn', link: 'https://www.linkedin.com/in/andreamaganrey/' },
    { id: 2, name: 'Github', link: 'https://github.com/andreamagan' },
    { id: 3, name: 'Behance', link: 'https://www.behance.net/andreamaganrey' },
    { id: 4, name: 'Twitter', link: 'https://twitter.com/AndreaMaganRey' }
  ];

  constructor() { }
}
