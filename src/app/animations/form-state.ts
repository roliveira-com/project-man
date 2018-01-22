import { trigger, state, style, transition, animate, query, group } from '@angular/animations';

export const FormState = trigger('formState',[
  transition('* => *',[
    query('input.ng-invalid:focus', [
      animate('500ms ease-out', style({
        backgroundColor: '#ffa4b6'
      }))
    ], {optional: true})
  ])
])