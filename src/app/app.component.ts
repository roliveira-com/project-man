import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HideHero } from './animations/hide-hero';
import { AnimationBuilder, trigger, state, style, transition, animate, group, query, animateChild } from '@angular/animations/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:
   ['./app.component.scss'],
  animations: [
    HideHero,
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            // Este método dispara a animação associada ao elemento, feita da maneira
            // antiga primeiro, e depois ativa a animação abaixo. Pode ser
            // útil nos casos que precisamos empregar duas animações
            // animateChild(),
            style({
              transform: 'translateY(-400px)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('300ms ease-out', style({
              transform: 'translateY(600px)',
              opacity: 0
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {

  heroCollapse = true;

  constructor(private builder: AnimationBuilder){}

  // Disparando animações programaticamente
  // Com a classe AnimationBuilder instanciada no contrutor é possivel
  // configurar animações para serem disparadas programaticamente
  // O metodo abaixo que faz o formulário de login pulsar quando clicar 
  // no botão login do proprio formulári. No botão,fazemos o bindo deste 
  // métdodo ao evento click e como parametro passamos o elemento alvo da animação
  // capturado atraves de uma template variable
  pulseLoginForm(element: any){
    const animation = this.builder.build([
      style({
        transform: 'scale(1)'
      }),
      animate(100, style({
        transform: 'scale(1.2)'
      })),
      animate(100)
    ]);

    const player = animation.create(element);
    player.play();
  }

  getAnimationData(outlet: RouterOutlet){
    console.log(outlet);
    if(outlet){
      const routeData = outlet.activatedRouteData['animation'];
      if (!routeData) {
        return 'rootPage';
      }
      return routeData['page'];
    }else{
      return 'rootPage';
    }
  }

}
