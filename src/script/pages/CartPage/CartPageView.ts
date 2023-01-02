import { Cart } from "../../services/cart";
import { Header } from "../../services/header";
import { LoadData } from "../../services/loader";
import { Render } from "../../services/render";
import { ICard } from "../../types";

export class CartPageView {
  data: LoadData;
  item: ICard[];
  rootNode: HTMLElement;
  render: Render;
  cart: Cart;


  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('main');
    this.data = new LoadData;
    this.item = [];
    this.render = new Render;
    this.cart = new Cart();
  }

  async load() {
    this.rootNode.innerHTML = this.render.templateCart();
    const arr = await this.data.load();
    const keys: (string | null)[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }
    this.item = arr.filter(e => keys.includes(String(e.id)));
    const itemsPath = <HTMLElement>document.querySelector('.cart-items');
    this.render.items(this.item, itemsPath, 'cart');
    this.render.header(this.item);
    this.cart.addItemBtnsListeners(this.item);
    if (this.item.length <= 0 && itemsPath) {
      itemsPath.innerHTML = 'Items not found';
    }
  }
}