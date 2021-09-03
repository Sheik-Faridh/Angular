import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import profileJSON from '../../../profile.json';
import {
  IEducation,
  IExperience,
  IAchievement,
  IAnimation,
} from './career.interface';
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
export class CareerComponent implements OnInit, OnDestroy {
  educations: IEducation[] = profileJSON.educations;
  workExperiences: IExperience[] = profileJSON.experience;
  achievements: (IAchievement & IAnimation)[] = profileJSON.achievements.map(
    (a: IAchievement) => ({ ...a, animationState: 'inactive' })
  );
  activeExperience: string = this.workExperiences[0].company;
  activeIndex: number = 0;
  renderComponent: boolean = false;
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;
  isXTranslate!: boolean;
  edAnimationState: string = 'inactive';
  expAnimationState: string = 'inactive';

  constructor() {}

  ngOnInit() {
    this.isXTranslate = window.innerWidth < 505 ? true : false;
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      this.isXTranslate = window.innerWidth < 505 ? true : false;
    });
  }

  setSelected(companyName: string, index: number) {
    this.activeExperience = companyName;
    this.activeIndex = index;
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
