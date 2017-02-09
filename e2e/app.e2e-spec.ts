import { AngularDeviseTokenSeedPage } from './app.po';

describe('angular-devise-token-seed App', function() {
  let page: AngularDeviseTokenSeedPage;

  beforeEach(() => {
    page = new AngularDeviseTokenSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
