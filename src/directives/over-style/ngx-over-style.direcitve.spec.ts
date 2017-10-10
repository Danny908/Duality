import { NgxOverStyleDirective } from './ngx-over-style.directive';

describe('NgxOverStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new NgxOverStyleDirective(this);
    expect(directive).toBeTruthy();
  });
  it('should return the OS class', () => {
    const directive = new NgxOverStyleDirective(this);
    expect(directive.OS).not.toBeDefined();
  });
  it('should return the BROWSER class', () => {
    const directive = new NgxOverStyleDirective(this);
    expect(directive.BROWSER).not.toBeDefined();
  });
});
