import { WebAppResolvePage } from './app.po';

describe('web-app-resolve App', () => {
  let page: WebAppResolvePage;

  beforeEach(() => {
    page = new WebAppResolvePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
