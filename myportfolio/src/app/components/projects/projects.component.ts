import { Component } from '@angular/core';
import profileJSON from '../../../profile.json';
import { IMainProjects, IOtherProjects } from './projects.interface';
import {
  fadeAnimation,
  fadeInUpAnimation,
  listAnimation,
} from 'src/app/app.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fadeAnimation, fadeInUpAnimation, listAnimation],
})
export class ProjectsComponent {
  mainProjects: IMainProjects[] = profileJSON.projects.mainProjects;
  otherProjects: IOtherProjects[] = profileJSON.projects.otherProjects;
  renderComponent: boolean = false;
  constructor() {}
}
