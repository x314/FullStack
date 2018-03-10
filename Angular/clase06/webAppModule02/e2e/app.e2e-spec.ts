import { WebAppModule01Page } from './app.po';

describe('web-app-module01 App', () => {
  let page: WebAppModule01Page;

  beforeEach(() => {
    page = new WebAppModule01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
