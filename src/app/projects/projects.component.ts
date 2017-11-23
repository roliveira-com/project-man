import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';

import { selectProject } from '../animations/project-selection';
import { ItemManipulation, ItemShown } from '../animations/item-manipulation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    selectProject,
    ItemManipulation
  ]
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  markedPrjIndex = null;
  progress = 'progressing';

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
}
