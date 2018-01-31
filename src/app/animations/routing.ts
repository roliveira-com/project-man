import { trigger, state, style, transition, animate, animation, useAnimation } from '@angular/animations';

// Reusando animações
// Ao importar os métodos 'animation' e 'useAnimation' voce pode encapsular animações para serem 
// reusadas posteriormente inclusive com parametros dinamicos através de string interpolation
const fadeAnimation = animation([
  style({
    opacity: '{{ startOpacity }}'
  }),
  animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '100ms'}});

export const RouteFadeState = trigger('routeFadeState', [
  transition(':enter', [
    // usando a animação definida na constante 'fadeAnimation'
    // e configurando para que ela aceite parâmetros
    // useAnimation(fadeAnimation, { params: params})
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

export const RouteSlideState = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'translateY(100%)',
    opacity: 0
  })))  
])
