import { WebAppBookPage } from './app.po';

describe('web-app-book App', () => {
  let page: WebAppBookPage;

  beforeEach(() => {
    page = new WebAppBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
