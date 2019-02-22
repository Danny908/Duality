import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const Translate: AnimationTriggerMetadata =
  trigger('translate', [
    state('inactive', style({
      transform: 'translate(0, 0)'
    })),
    state('active', style({
        transform: 'translate({{x}}, {{y}})'
    }), {params: {x: 0, y: 0}}),
    transition('inactive <=> active', animate('{{timing}}'), {params: {timing: '150ms ease-in-out'}}),
  ]);
