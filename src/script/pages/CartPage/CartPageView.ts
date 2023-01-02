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

  async load() {
    this.rootNode.innerHTML = this.render.templateCart();
    const arr = await this.data.load();
    const keys: (string | null)[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }
    console.log(keys);
    this.item = arr.filter(e => keys.includes(String(e.id)));
    console.log(this.item);
    this.render.items(this.item, <HTMLElement>document.querySelector('.cart-items'), 'cart');
    this.addItemBtnsListeners(this.item);
  }

  addItemBtnsListeners(defaultData: ICard[]) {
    const addBtns = document.querySelectorAll('.add');
    const removeBtns = document.querySelectorAll('.remove');
    if (addBtns) {
      addBtns.forEach(el => {
        el.removeEventListener('click', (e) => {
          e.preventDefault();
          this.cart.addToCart(el);
          this.header.update(defaultData, 'add', el)
      });
        el.addEventListener('click', (e) => {
          e.preventDefault();
          this.cart.addToCart(el);
          this.header.update(defaultData, 'add', el)
        });
      });
    }

    if (removeBtns) {
      removeBtns.forEach(el => {
        el.removeEventListener('click', (e) => {
          e.preventDefault();
          this.cart.removeFromCart(el);
          this.header.update(defaultData, 'remove', el)
      });
        el.addEventListener('click', (e) => {
          e.preventDefault();
          this.cart.removeFromCart(el);
          this.header.update(defaultData, 'remove', el)
        });
      });
    }
  }
}