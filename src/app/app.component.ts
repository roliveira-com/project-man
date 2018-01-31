import { Component } from '@angular/core';

import { HideHero } from './animations/hide-hero';
import { AnimationBuilder, trigger, state, style, transition, animate } from '@angular/animations/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:
   ['./app.component.scss'],
  animations: [
    HideHero
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

}
