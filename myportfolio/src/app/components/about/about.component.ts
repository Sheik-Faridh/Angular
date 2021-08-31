import { Component, ViewEncapsulation } from '@angular/core';
import {
  fadeAnimation,
  fadeInUpAnimation,
  listAnimation,
} from 'src/app/app.animation';
import profileJSON from '../../../profile.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeAnimation, fadeInUpAnimation, listAnimation],
})
export class AboutComponent {
  technologies: string[] = profileJSON.about_me.technology;
  renderComponent: boolean = false;

  constructor() {}
}
