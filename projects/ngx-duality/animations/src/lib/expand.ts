import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const Expand: AnimationTriggerMetadata =
  trigger('expandState', [
    state('inactive', style({
      height: 0,
      overflow: 'hidden'
    })),
    state('active', style({
      height: '*',
      overflow: 'hidden'
    })),
    transition('inactive <=> active', animate('{{timing}}'), {params: {timing: '250ms ease-in-out'}}),
  ]);
