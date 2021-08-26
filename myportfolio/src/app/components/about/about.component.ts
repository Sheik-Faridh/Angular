import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import profileJSON from '../../../profile.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  technologies: string[] = profileJSON.about_me.technology;

  constructor() {}

  ngOnInit() {}
}
