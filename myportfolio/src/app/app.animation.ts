import {
  animate,
  keyframes,
  style,
  transition,
  query,
  stagger,
  trigger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('inactive => active', [
    animate(
      '1s',
      keyframes([
        style({
          transform: 'translateY(100px)',
          opacity: 0,
          offset: 0,
        }),
        style({ transform: 'translateY(40px)', opacity: 0.8, offset: 0.8 }),
        style({
          transform: 'translateY(0)',
          opacity: 1,
          offset: 1.0,
        }),
      ])
    ),
  ]),
  transition('* => *', [
    // each time the binding value changes
    query(':leave', [stagger(100, [animate('0.5s', style({ opacity: 0 }))])], {
      optional: true,
    }),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger(100, [animate('0.5s', style({ opacity: 1 }))]),
      ],
      { optional: true }
    ),
  ]),
]);

export const fadeAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('500ms', style({ opacity: 0 })),
  ]),
  transition('inactive => active', [
    animate(
      '1s ease-in',
      keyframes([
        style({
          transform: 'translateY(20px)',
          offset: 0,
        }),
        style({
          transform: 'translateY(0)',
          offset: 1.0,
        }),
      ])
    ),
  ]),
]);

export const fadeInDownAnimation = trigger('fadeInDown', [
  transition('void => *', [
    style({
      transform: 'translateY(-100px)',
    }),
    animate(
      '1s ease-in',
      style({
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

export const fadeInUpAnimation = trigger('fadeInUp', [
  transition('void => *', [
    style({
      transform: 'translateY(100px)',
      opacity: 0,
    }),
    animate(
      '1s',
      style({
        transform: 'translateY(0)',
        opacity: 1,
      })
    ),
  ]),
  transition('inactive => active', [
    style({
      transform: 'translateY(100px)',
      opacity: 0,
    }),
    animate(
      '1s',
      style({
        transform: 'translateY(0)',
        opacity: 1,
      })
    ),
  ]),
]);

export const bounceAnimation = trigger('bounce', [
  transition('void => *', [
    animate(
      '1.5s',
      keyframes([
        style({ offset: 0, transform: 'translateY(0)' }),
        style({ offset: 0.2, transform: 'translateY(0)' }),
        style({ offset: 0.4, transform: 'translateY(-30px)' }),
        style({ offset: 0.5, transform: 'translateY(0)' }),
        style({ offset: 0.6, transform: 'translateY(-15px)' }),
        style({ offset: 0.8, transform: 'translateY(0)' }),
        style({ offset: 1, transform: 'translateY(0)' }),
      ])
    ),
  ]),
]);
