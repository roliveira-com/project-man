import { trigger, state, style, transition, animate } from '@angular/animations';

export const RouteFadeState = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);
