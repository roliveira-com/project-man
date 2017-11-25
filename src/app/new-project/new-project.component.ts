import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsService } from '../projects/projects.service';

import { Project } from '../projects/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {

  newProjectForm: FormGroup;

  availableStatus = [
    'active',
    'inactive',
    'critical'
  ];

  constructor(
    private form: FormBuilder,
    private service: ProjectsService
  ) { }

  ngOnInit() {
    this.newProjectForm = this.form.group({
      title: this.form.control('', [Validators.required, Validators.minLength(5)]),
      description: this.form.control('', [Validators.required, Validators.minLength(5)]),
      status: this.form.control('', [Validators.required]),
    })
  }

  registerNewProject(prj: Project){
    this.service.createProject(prj);
    this.newProjectForm.reset();
  }

}
