import { Cart } from "../../services/cart";
import { Header } from "../../services/header";
import { LoadData } from "../../services/loader";
import { Render } from "../../services/render";
import { ICard } from "../../types";

export class ItemPageView {
  data: LoadData;
  item: ICard[];
  rootNode: HTMLElement;
  render: Render;
  header: Header;
  cart: Cart;

  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('main');
    this.data = new LoadData;
    this.item = [];
    this.render = new Render;
    this.header = new Header();
    this.cart = new Cart();
  }

  async load(id: number) {
    this.rootNode.innerHTML = this.render.templateItem();
    const arr = await this.data.load();
    this.item = arr.filter(e => e.id === id);
    this.render.items(this.item, <HTMLElement>document.querySelector('.item'), 'yes');
    this.render.breadcrumbs(this.item);
    this.render.header(arr);
    this.cart.addItemBtnsListeners(this.item);
    this.addBuyNow();
  }

  addBuyNow() {
    const buyBtn = document.querySelector('.buy-now');
    buyBtn?.addEventListener('click', () => {
      const arr = window.location.href.split('/');
      const cart = arr.slice(0, arr.length - 3);
      console.log(cart.join('/') + "?modal=yes#/cart");
      window.location.href = (cart.join('/') + "/?modal=yes#/cart");
      // this.addQueryParam('modal', 'yes')
    })
  }

  // addQueryParam(key: string, value: string) {
  //   const searchParam = new URLSearchParams(window.location.search);
  //   searchParam.set(key, value);
  //   const newPath = window.location.pathname + '?' + searchParam.toString();
  //   history.pushState(null, '', newPath);
  // }
}