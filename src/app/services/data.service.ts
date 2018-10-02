import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Skill } from '../models/skill';


@Injectable()
export class DataService {

  private urlProjects: string = "assets/files/projects.json";
  private urlSkills: string = "assets/files/skills.json";
  private urlCV: string = "assets/files/IvanPerezCV.pdf";

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.urlProjects);
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.urlSkills);
  }

}
