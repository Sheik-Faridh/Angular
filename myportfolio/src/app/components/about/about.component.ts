import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import profileJSON from '../../../profile.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(
          '2s ease-in',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  technologies: string[] = profileJSON.about_me.technology;

  constructor() {}

  ngOnInit() {}
}
