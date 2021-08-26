import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import profileJSON from '../../../profile.json';
import { ISocial } from './social.interface';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SocialComponent implements OnInit {
  socialList: ISocial[] = profileJSON.social.list;
  email: string = profileJSON.social.email;

  constructor() {}

  ngOnInit() {}
}
