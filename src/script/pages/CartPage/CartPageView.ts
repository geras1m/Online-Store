import { Cart } from "../../services/cart";
import { LoadData } from "../../services/loader";
import { Render } from "../../services/render";
import { ICard } from "../../types";
import { Pagination } from "../../services/pagination";

export class CartPageView {
  data: LoadData;
  item: ICard[];
  rootNode: HTMLElement;
  render: Render;
  cart: Cart;
  URL: URLSearchParams;
  addressModal: string | null;
  pagination: Pagination;


  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('main');
    this.data = new LoadData;
    this.item = [];
    this.render = new Render;
    this.cart = new Cart();
    this.URL = new URLSearchParams(window.location.search);
    this.addressModal = this.URL.get('modal');
    this.pagination = new Pagination();
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
    // this.render.items(this.item, itemsPath, 'cart');
    this.render.header(this.item);


    if (this.item.length <= 0 && itemsPath) {
      itemsPath.innerHTML = 'Items not found';
    }
    if (this.addressModal) {
      const cartBtn = document.querySelector('.buy-now-cart') as HTMLElement | null;
      if (cartBtn) {
        cartBtn.click();
        this.removeQueryParams();
      }
    }
    this.pagination.pagination(this.item, () => this.cart.addItemBtnsListeners(this.item));
    // this.cart.addItemBtnsListeners(this.item);
  }

  removeQueryParams() {
    const close = document.querySelector('.btn-close');
    const background = document.getElementById('buy-now-modal');
    const arr = window.location.href.split('/');
    arr[4] = '#';
    close?.addEventListener('click', () => {
      window.location.href = arr.join('/');
    });

    background?.addEventListener('click', function(event) {
      if (event.currentTarget !== event.target) {
        return;
      }
      window.location.href = arr.join('/');
    }, false)
  }
}
