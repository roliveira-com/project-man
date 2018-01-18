import { Component, OnInit, HostBinding } from '@angular/core';
import { RouteFadeState, RouteSlideState } from '../animations/routing';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    RouteFadeState,
    RouteSlideState
  ]
})
export class UsersComponent implements OnInit {
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
