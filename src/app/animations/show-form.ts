import { trigger, state, style, transition, animate } from '@angular/animations';

export const ShowForm = trigger('showForm',[
  transition(':enter',[
    style({
      transform: 'translateX(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateX(0)'
    }))
  ]),
  transition(':leave',[
    style({
      transform: 'translateX(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateX(-100%)'
    }))
  ])
])