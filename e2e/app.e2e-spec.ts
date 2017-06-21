import { NgxDualityPage } from './app.po';

describe('ngx-duality App', () => {
  let page: NgxDualityPage;

  beforeEach(() => {
    page = new NgxDualityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
