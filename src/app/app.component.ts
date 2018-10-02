import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Project } from './models/project';
import { Skill } from './models/skill';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projects: Project[];
  skillsBackend: Skill[];
  skillsFrontend: Skill[];
  skillsOthers: Skill[];
  link: string = "home";
  linkCV: string = `${environment.url}/assets/files/IvanPerezCV.pdf`;
  
  constructor(private dataService: DataService){}

  ngOnInit() {
    this.getProjects();
    this.getSkills();
  }

  getProjects() {
    this.dataService.getProjects()
      .subscribe(
        data => {
          this.projects = data['projects'];
        },
        error => {
          console.log('Error Error to load projects!');
        }
      )
  }

  getSkills() {
    this.dataService.getSkills()
      .subscribe(
        data => {
          this.skillsBackend = data['backend'];
          this.skillsFrontend = data['frontend'];
          this.skillsOthers = data['others']
        },
        error => {
          console.log('Error Error to load skills!')
        }
      )
  }

  toggleClass(value: string) {
    this.link = value;
  } 
}
