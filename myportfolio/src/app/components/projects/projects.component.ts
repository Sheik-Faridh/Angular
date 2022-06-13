import { Component } from '@angular/core';
import profileJSON from '../../../profile.json';
import {
  IAnimation,
  IMainProjects,
  IOtherProjects,
} from './projects.interface';
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
  mainProjects: (IMainProjects & IAnimation)[] =
    profileJSON.projects.mainProjects.map((p: IMainProjects) => ({
      ...p,
      animationState: 'inactive',
    }));
  otherProjects: (IOtherProjects & IAnimation)[] =
    profileJSON.projects.otherProjects.map((l: IOtherProjects) => ({
      ...l,
      animationState: 'inactive',
    }));
  renderComponent: boolean = false;
  showProjectListAnimation: boolean = false;
  constructor() {}
}
