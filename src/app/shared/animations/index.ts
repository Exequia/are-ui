import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';

export const navigationAnimation = [
  trigger('fadeElement', [
    // route 'enter and leave (<=>)' transition
    transition('*<=>*', [
      // css styles at start of transition
      style({ opacity: 0 }),
      // animation and styles at end of transition
      animate('0.3s', style({ opacity: 1 }))
    ])
  ])
];

// -----------------------------------------------------------------------------------------------------
// @ Zoom in
// -----------------------------------------------------------------------------------------------------
export const zoomIncrease = trigger('zoomIncrease', [
  state(
    'void',
    style({
      opacity: 1,
      transform: 'scale(1)'
    })
  ),

  state(
    'true',
    style({
      opacity: 1,
      transform: 'scale(1.3)'
    })
  ),

  // Prevent the transition if the state is false
  transition('void => false', [])
]);

// -----------------------------------------------------------------------------------------------------
// @ rotateY in
// -----------------------------------------------------------------------------------------------------
export const rotateYIncrease = trigger('rotateYIncrease', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'rotateY(0deg)'
    })
  ),

  state(
    'true',
    style({
      opacity: 1,
      transform: 'rotateY(360deg)'
    })
  ),

  // Prevent the transition if the state is false
  transition('void => false', [])
]);

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('200ms ease-out', style({ left: '100%' }))], { optional: true }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ]),
  transition('void => false', [])
]);
