import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const Expand: AnimationTriggerMetadata[] = [
  trigger('expandHeight', [
    state('inactive', style({
      height: 0,
      overflow: 'hidden'
    })),
    state('active', style({
      height: '*',
      overflow: 'hidden'
    })),
    transition('inactive <=> active', animate('{{timing}}'), {params: {timing: '250ms ease-in-out'}}),
  ]),
  trigger('expandWidth', [
    state('inactive', style({
      width: 0,
      overflow: 'hidden'
    })),
    state('active', style({
      width: '*',
      overflow: 'hidden'
    })),
    transition('inactive <=> active', animate('{{timing}}'), {params: {timing: '250ms ease-in-out'}}),
  ])
];
