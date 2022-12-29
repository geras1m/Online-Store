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
    this.addItemBtnsListeners(this.item);
  }

  addItemBtnsListeners(defaultData: ICard[]) {
    const addBtns = document.querySelectorAll('.add');
    const removeBtns = document.querySelectorAll('.remove');
    if (addBtns) {
        addBtns.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.cart.addToCart(el);
                this.header.update(defaultData, 'add', el)
            });
        });
    }

    if (removeBtns) {
        removeBtns.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.cart.removeFromCart(el);
                this.header.update(defaultData, 'remove', el)
            });
        });
    }
}
}