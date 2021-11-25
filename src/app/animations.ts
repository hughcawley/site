import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

export const transAnimation = animation([
  style({
    marginTop: '{{margin}}',
  }),
  animate('{{ time }}')
]);

export const fadeIn = animation([
  style({
    opacity: 1
  }),
  animate('2s')
]);
