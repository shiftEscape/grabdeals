import { GrabdealsPage } from './app.po';

describe('grabdeals App', () => {
  let page: GrabdealsPage;

  beforeEach(() => {
    page = new GrabdealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
