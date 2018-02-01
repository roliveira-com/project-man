import { Component, OnInit, HostBinding } from '@angular/core';
import { RouteFadeState, RouteSlideState } from '../animations/routing';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    // Chamando uma animação e passando parametros de configuração
    // RouteFadeState({startOpacity: 0, duration: '200ms'}),
    RouteSlideState
  ]
})
export class UsersComponent implements OnInit {
  // Criando o binding para animar a rota
  // Neste caso, a animação da rota é disparada programaticamente pelo
  // decorator '@HostBiding'
  // @HostBinding('@routeFadeState') routeAnimation = true;
  // @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
