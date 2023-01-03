import { ErrorPageController } from "../pages/404/ErrorPageController";
import { CartPageController } from "../pages/CartPage/CartPageController";
import { ItemPageController } from "../pages/ItemPage/ItemPageController";
import { MainPageView } from "../pages/MainPageView";
import { IRouteOption } from "../types/routers";

class Config {
  mainPage: MainPageView;
  itemPage: ItemPageController;
  cartPage: CartPageController;
  errPage: ErrorPageController;

  constructor() {
    this.mainPage = new MainPageView();
    this.itemPage = new ItemPageController();
    this.cartPage = new CartPageController();
    this.errPage = new ErrorPageController();

  }

  public getRoutes(): IRouteOption[] {
    const currRoutes: IRouteOption[] = [
      {
        path: / /,
        callback: () => this.mainPage.load(),
      },
      {
        path: /item/,
        callback: () => this.itemPage.createPage(),
      },
      {
        path: /cart/,
        callback: () => this.cartPage.createPage(),
      },
      {
        path: /./,
        callback: () => this.errPage.createPage(),
      },
    ];
    return currRoutes;
  }
}

export default new Config();