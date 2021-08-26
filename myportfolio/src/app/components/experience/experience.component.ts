import { Component, OnInit } from '@angular/core';
import profileJSON from '../../../profile.json';
import { IExperience } from './experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  workExperiences: IExperience[] = profileJSON.experience;
  activeExperience: string = this.workExperiences[0].company;
  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setSelected(companyName: string, index: number) {
    this.activeExperience = companyName;
    this.activeIndex = index;
  }
}
