import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';

import 'rxjs/add/operator/do';

import { selectProject } from '../animations/project-selection';
import { ItemManipulation, ItemShown, itemEnterTrigger } from '../animations/item-manipulation';
import { ShowForm } from '../animations/show-form';
import { RouteFadeState , RouteSlideState } from '../animations/routing';
import { projects } from './project.data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    selectProject,
    itemEnterTrigger,
    ShowForm,
    RouteFadeState,
    RouteSlideState
  ]
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  // Criando o binding para animar a rota
  // Neste caso, a animação da rota é disparada programaticamente pelo
  // decorator '@HostBiding'
  @HostBinding('@routeFadeState') routeAnimation = true;
  // @HostBinding('@routeSlideState') routeAnimation = true;

  projects: any[];

  // Efeito de lista staggered (quando os itens aparecem um após o outro)
  // o array 'displayedProjects' abrigará a lista de dados no lugar de array 'projects'
  // a princípio popularemos apenas o primeiro item neste novo array com o método 'loadProjects()'
  // e depois inserimos um item por vez conforme a animação do item anterior terminar
  displayedProjects: Project[] = [];
  markedPrjIndex = null;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) {
    // Demonstração dos dados retornados do Observable retornado pelo
    // método loadCompleteProjects() que traz dados mais complexos do
    // database
    // this.prjService.loadCompleteProjects()
    //   .subscribe(
    //     prjs => {
    //       prjs.forEach(prj => {
    //         console.log(prj);
    //         console.log(prj.key);
    //         console.log(prj.payload.val());
    //       })
    //     }
    //   )

    this.prjService.loadProjects()
      .subscribe(
      (prj) => {
        this.progress = 'finished';
        prj.reverse();
        this.projects = prj;
        if (this.projects.length >= 1) {
          this.displayedProjects.push(this.projects[0]);
        }
      }
    );
   }

  ngOnInit() {

  }

  ngAfterViewInit(){

  }

  onAnimationStart(event: AnimationEvent){
    console.log(event)
  }

  onAnimationDone(event: AnimationEvent){
    console.log(event)
  }

  // Com base nos eventos disparados  pela animaçãom este método
  // checa se animação do item da lista já foi completada e então
  // insere o proximo item do array 'projects' no array 'displayedProjects'
  // para que este item possa ser animado. Na view é necessário fazer o bind
  // do evento desta animação (@itemEnter.done - onde .done é o evento disparado
  // quando a animação termina) com o método abaixo
  onItemAnimated(animationEvt: AnimationEvent, lastPrjId: number){
    if(animationEvt.fromState !== 'void'){
      return;
    }
    if(this.projects.length > lastPrjId + 1){
      this.displayedProjects.push(this.projects[lastPrjId + 1]);
    } else {
      this.projects = this.displayedProjects;
    }
  }
}
