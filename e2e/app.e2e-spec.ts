import { EbaoAngular2Page } from './app.po';

describe('ebao-angular2 App', function() {
  let page: EbaoAngular2Page;

  beforeEach(() => {
    page = new EbaoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
