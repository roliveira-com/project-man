import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectsService } from '../projects/projects.service'
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public statusForm: FormGroup;

  @Input() project: Project;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() projectDeleted = new EventEmitter<void>();

  constructor(
    private form: FormBuilder,
    private api: ProjectsService
  ) { }

  ngOnInit() {
    this.statusForm = this.form.group({
      status: this.form.control(['', Validators.required])
    });
  }

  onUpdateStatus(prj: Project, status: string) {
    prj.status = status;
    this.api.updateProject(prj);
  }

  onDelete(prj: Project) {
    this.api.deleteProject(prj);
  }

  getPrjStatusClass(){
    return {
      'is-primary': this.project.status === 'active',
      'is-light': this.project.status === 'inactive',
      'is-danger': this.project.status === 'critical'
    }
  }
}
