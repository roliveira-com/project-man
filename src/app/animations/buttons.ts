import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const ButtonState = trigger('buttonState',[
  state('valid',style({
    opacity: 1
  })),
  state('invalid', style({
    opacity: 0.3
  })),
  transition('invalid => valid',[
    group([
      animate(100, style({
        transform: 'scale(1.2)'
      })),
      animate(200, style({
        opacity: 1
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
])