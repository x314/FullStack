import { WebAppObservablesPage } from './app.po';

describe('web-app-observables App', () => {
  let page: WebAppObservablesPage;

  beforeEach(() => {
    page = new WebAppObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
