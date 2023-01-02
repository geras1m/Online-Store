import { CartPageView } from "./CartPageView";

export class CartPageController {
  view: CartPageView;

  constructor() {
    this.view = new CartPageView();
  }

  public createPage(): void {
    this.view.load();
  }
}