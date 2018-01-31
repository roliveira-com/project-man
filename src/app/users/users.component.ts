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
  // Como não é possivel fazer o bind diretamente no HTML como em outros componentes
  // nas animações para as rotas usamos o decorator '@HostBiding' para associar a animação 
  // a esta rota
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
