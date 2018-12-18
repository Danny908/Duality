import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const Rotate: AnimationTriggerMetadata =
  trigger('rotateState', [
    state('inactive', style({
      transform: 'rotate(0deg)'
    })),
    state('active', style({
        transform: 'rotate({{rotation}}deg)'
    }), {params: {rotation: '90'}}),
    transition('inactive <=> active', animate('{{timing}}'), {params: {timing: '150ms ease-in-out'}}),
  ]);
