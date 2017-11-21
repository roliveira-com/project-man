import { trigger, state, style, transition, animate } from '@angular/animations';

export const selectProject = trigger('selectProj',[
  state('unselected', style({
    height: "65px",
    border: "1px solid #CCC"
  })),
  state('selected', style({
    height: "205px",
    padding: ".8em",
    border: "3px solid #00d1b2"
  })),
  transition('unselected <=> selected', [
    style({
      transform: "scale(1.05)"
    }),
    animate('300ms 100ms ease-out')
  ])
])