import { Component, ViewEncapsulation } from '@angular/core';
import { fadeAnimation, fadeInUpAnimation } from 'src/app/app.animation';
import profileJSON from '../../../profile.json';
import { ITechnology } from './about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeAnimation, fadeInUpAnimation],
})
export class AboutComponent {
  technologies: ITechnology[] = profileJSON.about_me.technology.map(
    (t: string) => ({ name: t, animationState: 'inactive' })
  );
  renderComponent: boolean = false;
  imageAnimationState: string = 'inactive';

  constructor() {}
}
