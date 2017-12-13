import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Project } from './project.model';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';

@Injectable()
export class ProjectsService {
  // private data: Project[] = projects;
  public projects: Observable<Project[]>;

  projetos: Project[] = [];

  constructor(private http: HttpClient){}

  loadProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:3000/projetos');
  }

  createProject(prj: Project) {
    let dateId = new Date(); 
    prj.id = dateId.getTime();
    this.http.post('http://localhost:3000/projetos',prj).subscribe(retorno => console.log(retorno))
  }

  updateProject(prj: Project){
    return this.http.put(`http://localhost:3000/projetos/${prj.id}`, null)
  }

  deleteProject(prj: Project){
    const message = `Deseja mesmo remover o Projeto "${prj.title}" ?`;
    if (window.confirm(message)) {
      this.http.delete<Project>(`http://localhost:3000/projetos/${prj.id}`).subscribe(retorno => console.log(retorno))
      // let updatedProjects = this.projects.slice(0);
      // let index = updatedProjects.indexOf(prj);
      // updatedProjects.splice(index, 1);
      // this.projects = updatedProjects;
    }
  }
}
