import { trigger, state, style, transition, animate, query, keyframes, stagger } from '@angular/animations';

export const ListState = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      stagger(400,[
        animate('500ms ease-out', keyframes([
          style({ opacity: 1, transform: 'translateX(15%)' }),
          style({ opacity: 1, transform: 'translateX(0)' })
        ]))
      ]),
    ], {optional: true})
  ])
])