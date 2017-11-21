import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

import { Project } from './project.model';

@Injectable()
export class ProjectsService {
  private projects: Observable<Project[]>

  constructor(private database: AngularFireDatabase){}

  loadProjects(): Observable<Project[]> {
    return this.database.list('projetos').valueChanges();
  }

  createProject(prj: Project) {
    prj.id = this.database.list('projetos').push(null).key;
    this.database.list('projetos').update(prj.id, prj)
      .then(() => console.log(`Dados Gravados: ${prj.id}`))
      .catch(erro => console.log(erro.message));
  }

  updateProject(prj: Project){
    this.database.list('projetos').update(prj.id, prj)
      .then((ok) => console.log(ok))
      .catch((error) => console.log(error))
  }

  deleteProject(prj: Project){
    const message = `Deseja mesmo remover o Projeto "${prj.title}" ?`;
    if (window.confirm(message)) {
      this.database.list('projetos').remove(prj.id);
    }
  }
}
