import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import profileJSON from '../../../profile.json';
import { IIntro } from './home.interface';

@Component({
  selector: 'app-home',
  animations: [
    trigger('insertTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  intro: IIntro = profileJSON.intro;
  email: string = profileJSON.social.email;

  constructor() {}

  ngOnInit() {}
}
