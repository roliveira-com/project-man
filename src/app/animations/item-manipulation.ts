import { trigger, state, style, transition, animate } from '@angular/animations';

export const ItemManipulation = trigger('itemManipulation',[
  // Também, no lugar de 'void => *' pode usar o alias ':enter'
  // e no lugar de '* => void', o alias ':leave'
  transition(':enter',[
    style({opacity: 0}), animate('300ms')
  ]),
  transition('* => void',animate('1s'))
])

export const ItemShown = trigger('itemShown',[
  state('ready', style({ opacity: 1 })),
  transition('void => ready', animate('1s 0s ease-in')),
  transition('ready => void', animate('1s 0s ease-out'))
])