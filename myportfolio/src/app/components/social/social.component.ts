import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import profileJSON from '../../../profile.json';
import { ISocial } from './social.interface';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bounce', [
      transition('void => *', [
        animate(
          '1.5s',
          keyframes([
            style({ offset: 0, transform: 'translateY(0)' }),
            style({ offset: 0.2, transform: 'translateY(0)' }),
            style({ offset: 0.4, transform: 'translateY(-30px)' }),
            style({ offset: 0.5, transform: 'translateY(0)' }),
            style({ offset: 0.6, transform: 'translateY(-15px)' }),
            style({ offset: 0.8, transform: 'translateY(0)' }),
            style({ offset: 1, transform: 'translateY(0)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SocialComponent implements OnInit {
  socialList: ISocial[] = profileJSON.social.list;
  email: string = profileJSON.social.email;

  constructor() {}

  ngOnInit() {}
}
