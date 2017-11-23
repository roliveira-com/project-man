import { Component } from '@angular/core';

import { HideHero } from './animations/hide-hero'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:
   ['./app.component.css'],
  animations: [
    HideHero
  ]
})
export class AppComponent {

  heroCollapse = true

}
