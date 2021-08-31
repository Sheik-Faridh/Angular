import { Component } from '@angular/core';
import profileJSON from '../../../profile.json';
import { IEducation, IExperience, IAchievement } from './career.interface';
import {
  listAnimation,
  fadeAnimation,
  fadeInUpAnimation,
} from 'src/app/app.animation';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  animations: [listAnimation, fadeAnimation, fadeInUpAnimation],
})
export class CareerComponent {
  educations: IEducation[] = profileJSON.educations;
  workExperiences: IExperience[] = profileJSON.experience;
  achievements: IAchievement[] = profileJSON.achievements;
  activeExperience: string = this.workExperiences[0].company;
  activeIndex: number = 0;
  renderComponent: boolean = false;

  constructor() {}

  setSelected(companyName: string, index: number) {
    this.activeExperience = companyName;
    this.activeIndex = index;
  }
}
