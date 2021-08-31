import { Component, HostListener } from '@angular/core';
import { fadeInDownAnimation } from 'src/app/app.animation';
import { ILink } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInDownAnimation],
})
export class HeaderComponent {
  scrollTop: number = 0;
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
