import { trigger, state, style, transition, animate } from '@angular/animations';

export const HideHero = trigger('hideHero', [
  state('collapsed', style({
    height: 0,
    padding: 0,
    overflow: 'hidden',
    opacity: 0
  })),
  state('uncollapsed', style({
    height: '*',
    overflow: 'hidden',
    opacity: 1
  })),
  transition('collapsed <=> uncollapsed', animate('300ms ease-in-out')),
])