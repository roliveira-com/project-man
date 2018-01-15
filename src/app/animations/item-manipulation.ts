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

export const ItemAppearanceTrigger = trigger('ItemAppearance', [
  state('on', style({ opacity: 1, transform: 'translateX(0px)' })),
  state('off', style({ opacity: 0, transform: 'translateX(-100%)' })),
  transition('off => on', animate('1s 1s ease-in')),
  transition('on => off', animate('1s 1s ease-out', keyframes([
    style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
    style({ opacity: 0, transform: 'translateX(-50px)', offset: 1 })
  ])))
])

export const itemEnterTrigger = trigger('itemEnter',[
  transition(':enter',[
    animate('800ms ease-out', keyframes([
      style({ opacity: 0, transform: 'translateX(-100%)'}),
      style({ opacity: 1, transform: 'translateX(15%)'}),
      style({ opacity: 1, transform: 'translateX(0)'})
    ]))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
  ])
])