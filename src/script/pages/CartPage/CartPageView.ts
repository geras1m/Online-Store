import { Cart } from "../../services/cart";
import { LoadData } from "../../services/loader";
import { Render } from "../../services/render";
import { ICard } from "../../types";

export class CartPageView {
  data: LoadData;
  item: ICard[];
  rootNode: HTMLElement;
  render: Render;
  cart: Cart;
  URL: URLSearchParams;
  addressModal: string | null;


  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('main');
    this.data = new LoadData;
    this.item = [];
    this.render = new Render;
    this.cart = new Cart();
    this.URL = new URLSearchParams(window.location.search);
    this.addressModal = this.URL.get('modal');
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
    if (this.addressModal) {
      const cartBtn = document.querySelector('.buy-now-cart') as HTMLElement | null;
      if (cartBtn) {
        cartBtn.click();
        this.removeQueryParams();
      }
    }
    this.checkInput();
    this.modalSubmit();
  }

  checkInput() {
    const fieldDate = <HTMLInputElement>document.querySelector('.card-month');
    const fieldCardNum = <HTMLInputElement>document.querySelector('.card-num');
    const fieldCardIMG = <HTMLImageElement>document.querySelector('.card-img');
    if (fieldDate) {
      fieldDate.addEventListener('input', () =>{
        if (fieldDate.value.length === 2 && !fieldDate.value.includes('/')) {
          fieldDate.value += '/';
        }
      })
    }
    if (fieldCardNum && fieldCardIMG) {
      fieldCardNum.addEventListener('input', () => {
        if (fieldCardNum.value[0] === '2') {
          fieldCardIMG.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png';
        }
        else if (fieldCardNum.value[0] === '1') {
          fieldCardIMG.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png';
        } else if (fieldCardNum.value[0] === '3') {
          fieldCardIMG.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1200px-UnionPay_logo.svg.png';
        } else {
          fieldCardIMG.src = 'https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png';
        }
      })
    }
  }

  modalSubmit() {
    const form = <HTMLFormElement>document.querySelector('.modal-form');
    const closeBtn = <HTMLButtonElement>document.querySelector('.btn-close');
    form.addEventListener('submit', () => {
      closeBtn.click();
      localStorage.clear();
      this.rootNode.innerHTML = ` <div class="alert container text-center">
      All items has been purchased! You will be redirected to the main page.
      </div> `;
      setTimeout(() => {
        window.location.href = '/dist/#/';
      }, 4000);
    })
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