import { trigger, state, style, transition, animate, query, group } from '@angular/animations';

export const selectProject = trigger('selectProj',[
  state('unselected', style({
    height: '65px',
    border: '1px solid #CCC'
  })),
  state('selected', style({
    // o uso do '*' diz ao angular para animar para o valor relativo 
    // do elemento. Neste caso, já que a altura depende do conteudo dentro do elemento
    // o angular já vai buscar a latura real de cada um e substituir o '*'
    // pela a altura relativa
    height: '*',
    padding: '.8em',
    border: '3px solid #00d1b2'
  })),
  transition('unselected <=> selected', [
    group([
      style({
        transform: 'scale(1.05)'
      }),
      animate('300ms 100ms ease-out'),
      query('.tag', [
        style({
          transform: 'scale(1)'
        }),
        animate('200ms', style({
          transform: 'scale(1.1)'
        })),
        animate(200)
      ]),
      query('h3', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('200ms', style({
          transform: 'translateX(0)'
        })),
      ])
    ])
  ])
])