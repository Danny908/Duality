import { NgxOverStyleDirective } from './ngx-over-style.directive';
import { Renderer2 } from '@angular/core';

describe('NgxOverStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new NgxOverStyleDirective(this, this);
    expect(directive).toBeTruthy();
  });
});
