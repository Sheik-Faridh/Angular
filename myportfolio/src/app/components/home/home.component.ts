import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import profileJSON from '../../../profile.json';
import { IIntro } from './home.interface';

@Component({
  selector: 'app-home',
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          transform: 'translateY(100px)',
          opacity: 0,
        }),
        animate(
          '1s',
          style({
            transform: 'translateY(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  intro: IIntro = profileJSON.intro;

  constructor() {}

  ngOnInit() {}
}
