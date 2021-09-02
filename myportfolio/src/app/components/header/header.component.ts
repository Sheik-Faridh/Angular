import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { fadeInDownAnimation } from 'src/app/app.animation';
import { ILink } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInDownAnimation],
})
export class HeaderComponent implements OnInit, OnDestroy {
  scrollObservable$!: Observable<Event>;
  scrollSubscription$!: Subscription;
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;
  scrollTop: number = 0;
  showMenuListIcon!: boolean;
  showMenuIcon: boolean = false;
  links: ILink[] = [
    {
      href: '/#about',
      name: 'About',
      className: 'bi bi-person',
    },
    {
      href: '/#career',
      name: 'Career',
      className: 'bi bi-graph-up',
    },
    {
      href: '/#projects',
      name: 'Projects',
      className: 'bi bi-bookshelf',
    },
    {
      href: '/#connect',
      name: 'Connect',
      className: 'bi bi-envelope',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.showMenuListIcon = window.innerWidth < 590 ? true : false;
    this.scrollObservable$ = fromEvent(window, 'scroll');
    this.scrollSubscription$ = this.scrollObservable$.subscribe(() => {
      this.scrollTop = document.documentElement.scrollTop;
    });
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      this.showMenuListIcon = window.innerWidth < 590 ? true : false;
    });
  }

  delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  isEleRendered(targetEle: HTMLElement | null) {
    return targetEle
      ? targetEle.querySelectorAll(':scope > main').length === 1
      : false;
  }

  async scrollTo(name: string) {
    this.showMenuIcon = false;
    const targetEle: HTMLElement | null = document.querySelector(
      `#${name.toLowerCase()}`
    );
    const isRendered = this.isEleRendered(targetEle);
    if (isRendered)
      return targetEle && targetEle.scrollIntoView({ behavior: 'smooth' });
    const index = this.links.findIndex((l) => l.name === name);
    if (index >= 0) {
      for (let i = 0; i <= index; i++) {
        const el: HTMLElement | null = document.querySelector(
          `#${this.links[i].name.toLowerCase()}`
        );
        if (this.isEleRendered(el)) {
          this.links[i].name == name &&
            el &&
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          continue;
        } else {
          el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          await this.delay(700);
        }
      }
    }
  }

  ngOnDestroy() {
    this.scrollSubscription$.unsubscribe();
    this.resizeSubscription$.unsubscribe();
  }
}
