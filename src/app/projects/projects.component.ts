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
  // @HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideState') routeAnimation = true;

  projects: any[];
  displayedProjects: Project[] = [];
  markedPrjIndex = null;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) {

    this.prjService.loadProjects().subscribe(prj => {
        this.progress = 'finished';
        prj.reverse();
        this.projects = prj;
      }
    );

    this.prjService.watchProject().subscribe(prj => {
      this.projects.unshift(prj);
    });
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

  onItemAnimated(animationEvt: AnimationEvent, lastPrjId: number){
    if(animationEvt.fromState != 'void'){
      return;
    }
    if(this.projects.length > lastPrjId + 1){
      this.displayedProjects.push(this.projects[lastPrjId + 1]);
    } else {
      this.projects = this.displayedProjects
    }
  }
}
