import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const Fade: AnimationTriggerMetadata =
  trigger('fade', [
    state('inactive', style({
        opacity: 0,
        zIndex: -1
    })),
    state('active', style({
        opacity: 1
    })),
    transition('inactive <=> active', animate('{{timing}}'), {params: {timing: '150ms ease-in-out'}}),
    transition(':leave', style({ zIndex: -1})),
  ]);
