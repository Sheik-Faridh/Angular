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

  scrollTo(name: string) {
    const el: HTMLElement | null = document.querySelector(
      `#${name.toLowerCase()}`
    );
    el && el.scrollIntoView({ behavior: 'smooth' });
    this.showMenuIcon = false;
    setTimeout(() => el && el.scrollIntoView({ behavior: 'smooth' }), 500);
  }

  ngOnDestroy() {
    this.scrollSubscription$.unsubscribe();
    this.resizeSubscription$.unsubscribe();
  }
}
