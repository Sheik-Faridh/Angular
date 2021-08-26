import { Component, OnInit } from '@angular/core';
import profileJSON from '../../../profile.json';
import { IMainProjects, IOtherProjects } from './projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  mainProjects: IMainProjects[] = profileJSON.projects.mainProjects;
  otherProjects: IOtherProjects[] = profileJSON.projects.otherProjects;
  constructor() {}

  ngOnInit(): void {}
}
