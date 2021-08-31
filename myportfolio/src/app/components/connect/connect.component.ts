import { Component } from '@angular/core';
import { fadeAnimation, fadeInUpAnimation } from 'src/app/app.animation';
import profileJSON from '../../../profile.json';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  animations: [fadeAnimation, fadeInUpAnimation],
})
export class ConnectComponent {
  email: string = profileJSON.social.email;
  renderComponent: boolean = false;
  constructor() {}
}
