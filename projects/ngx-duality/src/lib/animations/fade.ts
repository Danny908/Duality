import { style, animate } from '@angular/animations';

export const Fade = {
  fadeIn: function(timing: number | string): any {   
    return [
      style({
        opacity: 0
       }),
      animate(timing, style({
        opacity: 1
      }))
    ];
  },
  fadeOut: function(timing: number | string): any {   
    return [
      style({
        opacity: 1
       }),
      animate(timing, style({
        opacity: 0
      }))
    ];
  }
}