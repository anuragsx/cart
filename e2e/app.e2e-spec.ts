import { CartPage } from './app.po';

describe('cart App', () => {
  let page: CartPage;

  beforeEach(() => {
    page = new CartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
