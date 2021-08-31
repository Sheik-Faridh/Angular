import { Component } from '@angular/core';
import { fadeInUpAnimation } from 'src/app/app.animation';
import profileJSON from '../../../profile.json';
import { IIntro } from './home.interface';

@Component({
  selector: 'app-home',
  animations: [fadeInUpAnimation],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  intro: IIntro = profileJSON.intro;

  constructor() {}
}
