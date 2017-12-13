import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';

import 'rxjs/add/operator/do';

import { selectProject } from '../animations/project-selection';
import { ItemManipulation, ItemShown, itemEnterTrigger } from '../animations/item-manipulation';
import { projects } from './project.data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    selectProject,
    itemEnterTrigger
  ]
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  projects: Project[];
  displayedProjects: Array<Project>;
  markedPrjIndex = null;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) {}

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
      (prj) => {
        this.progress = 'finished';
        this.projects = prj;
        // if (this.projects.length >= 1) {
        //   this.displayedProjects.push(Object.assign({},this.projects[0]));
        //   console.log(this.displayedProjects);
        // }
      }
    );
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
