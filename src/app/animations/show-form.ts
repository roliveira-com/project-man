import { trigger, state, style, transition, animate } from '@angular/animations';

export const ShowForm = trigger('showForm',[
  transition(':enter',[
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ])
])