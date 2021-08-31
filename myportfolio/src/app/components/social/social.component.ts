import { Component, ViewEncapsulation } from '@angular/core';
import { bounceAnimation } from 'src/app/app.animation';
import profileJSON from '../../../profile.json';
import { ISocial } from './social.interface';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [bounceAnimation],
})
export class SocialComponent {
  socialList: ISocial[] = profileJSON.social.list;
  email: string = profileJSON.social.email;

  constructor() {}
}
