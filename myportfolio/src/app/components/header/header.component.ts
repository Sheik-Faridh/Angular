import { Component, OnInit, HostListener } from '@angular/core';
import { rotateAnimation } from 'angular-animations';
import { ILink } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    rotateAnimation(),
    rotateAnimation({ anchor: 'rotate90', degrees: 90 }),
  ],
})
export class HeaderComponent implements OnInit {
  scrollTop: number = 0;
  links: ILink[] = [
    {
      href: '/#about',
      name: 'About',
      className: 'bi bi-person',
    },
    {
      href: '/#experience',
      name: 'Experience',
      className: 'bi bi-briefcase',
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

  ngOnInit() {}

  @HostListener('window:scroll')
  handleScroll() {
    this.scrollTop = document.documentElement.scrollTop;
  }

  scrollTo(name: string) {
    const el: HTMLElement | null = document.querySelector(
      `#${name.toLowerCase()}`
    );
    el && el.scrollIntoView({ behavior: 'smooth' });
  }
}
