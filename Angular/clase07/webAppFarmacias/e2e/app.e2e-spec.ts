import { WebAppFarmaciasPage } from './app.po';

describe('web-app-farmacias App', () => {
  let page: WebAppFarmaciasPage;

  beforeEach(() => {
    page = new WebAppFarmaciasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
