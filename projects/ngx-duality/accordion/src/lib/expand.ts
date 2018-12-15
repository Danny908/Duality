import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const Expand: AnimationTriggerMetadata =
  trigger('expandState', [
    state('hide', style({
      height: 0,
      overflow: 'hidden'
    })),
    state('show', style({
      height: '*',
      overflow: 'hidden'
    })),
    transition('hide <=> show', animate('{{timing}}'), {params: {timing: '250ms ease-in-out'}}),
  ]);
