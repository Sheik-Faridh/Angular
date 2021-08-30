import { Component, OnInit } from '@angular/core';
import profileJSON from '../../../profile.json';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent implements OnInit {
  email: string = profileJSON.social.email;
  constructor() {}

  ngOnInit(): void {}
}
