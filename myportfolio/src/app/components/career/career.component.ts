import { Component, OnInit } from '@angular/core';
import profileJSON from '../../../profile.json';
import { IEducation, IExperience, IAchievement } from './career.interface';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  educations: IEducation[] = profileJSON.educations;
  workExperiences: IExperience[] = profileJSON.experience;
  achievements: IAchievement[] = profileJSON.achievements;
  activeExperience: string = this.workExperiences[0].company;
  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setSelected(companyName: string, index: number) {
    this.activeExperience = companyName;
    this.activeIndex = index;
  }
}
