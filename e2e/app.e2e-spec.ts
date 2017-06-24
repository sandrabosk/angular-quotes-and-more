import { AngularQuotesPage } from './app.po';

describe('angular-quotes App', () => {
  let page: AngularQuotesPage;

  beforeEach(() => {
    page = new AngularQuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
