import { WebAppPipesPage } from './app.po';

describe('web-app-pipes App', () => {
  let page: WebAppPipesPage;

  beforeEach(() => {
    page = new WebAppPipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
