import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

import { Project } from './project.model';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';

// Para dev, descomentar linhas abaixo para uso de dados offline

// Importando dependencia para gerar observable
// import { Observer } from 'rxjs/Observer';

// Importando dados offline
// import { projects } from './project.data';

@Injectable()
export class ProjectsService {
  // private data: Project[] = projects;
  private projects: Observable<Project[]>;
  private socket = io('http://localhost:8080');

  constructor(private http: HttpClient){}

  // método que retorna um obervable dos dados de projeto
  // loadOfflineProjects(): Observable<Project[]> {
  //   const prjLoader = Observable.create((observer: Observer<Project[]>) => {
  //     setTimeout(() => {
  //       observer.next(this.data);
  //     }, 2000);
  //   });
  //   return prjLoader;
  // }

  loadProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:8080/api/projects/')
  }

  // createProject(prj: Project): Observable<void> {
  //   console.log(prj)
  //   return this.http.post<Project>('http://localhost:8080/api/projects/', prj)
  //     .map(prj => console.log(`Projeto Id: ${prj._id} foi inserido com sucesso`));
  // }

  createProject(prj: Project){
    this.socket.emit('newproject', prj);
  }

  watchProject(){
    const observable  = new Observable<Project>(observer => {
      this.socket.on('projectadded', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    })
    return observable;
  }

  // updateProject(prj: Project){
  //   this.database.list('projetos').update(prj.id, prj)
  //     .then((ok) => console.log(ok))
  //     .catch((error) => console.log(error))
  // }

  // deleteProject(prj: Project){
  //   const message = `Deseja mesmo remover o Projeto "${prj.title}" ?`;
  //   if (window.confirm(message)) {
  //     this.database.list('projetos').remove(prj.id);
  //   }
  // }
}
