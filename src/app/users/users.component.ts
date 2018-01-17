import { Component, OnInit, HostBinding } from '@angular/core';
import { RouteFadeState } from '../animations/routing';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    RouteFadeState
  ]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
