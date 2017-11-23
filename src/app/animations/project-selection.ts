import { trigger, state, style, transition, animate } from '@angular/animations';

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
    style({
      transform: 'scale(1.05)'
    }),
    animate('300ms 100ms ease-out')
  ])
])