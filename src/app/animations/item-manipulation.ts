import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const ItemManipulation = trigger('itemManipulation',[
  // Também, no lugar de 'void => *' pode usar o alias ':enter'
  // e no lugar de '* => void', o alias ':leave'
  transition(':enter',[
    style({opacity: 0}), animate('300ms')
  ]),
  transition('* => void',animate('300ms'))
])

export const ItemShown = trigger('itemShown',[
  state('ready', style({ opacity: 1, transform: 'translateX(0px)' })),
  transition('void => ready', animate('1s 1s ease-in')),
  transition('ready => void', animate('1s 1s ease-out', keyframes([
    style({ opacity: 1, transform: 'translateX(0px)', offset: 0}),
    style({ opacity: 0, transform: 'translateX(-50px)', offset: 1})
  ])))
])