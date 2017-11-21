import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('selectProj',[
      state('unselected', style({
        height: "65px",
        border: "1px solid #CCC"
      })),
      state('selected', style({
        height: "205px",
        padding: ".8em",
        border: "1px solid #00d1b2"
      })),
      transition('unselected => selected', [
        style({
          transform: "scale(1.05)"
        }),
        animate('600ms 100ms ease-out')
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  markedPrjIndex = null;
  progress = 'progressing';
  createNew = false;
  projectSelection = 'unselected';

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
        }
      );
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onSelect(){
    this.projectSelection = 'selected';
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.push(project);
  }
}
