import { ICard } from "../types";
import { Header } from "./header";
import { LoadData } from "./loader";
import { Render } from "./render";

export class Cart {
  header: Header;
  render: Render;
  data: LoadData;

  constructor() {
    this.header = new Header();
    this.render = new Render;
    this.data = new LoadData;
  }

  addItemBtnsListeners(defaultData: ICard[]) {
    let addBtns = document.querySelectorAll('.add');
    let removeBtns = document.querySelectorAll('.remove');
    if (addBtns) {
        addBtns.forEach(el => {
            el.replaceWith(el.cloneNode(true));
        });
        addBtns = document.querySelectorAll('.add');
        addBtns.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.addToCart(el);
                this.header.update(defaultData, 'add', el)
            });
        });
    }

    if (removeBtns) {
        removeBtns.forEach(el => {
            el.replaceWith(el.cloneNode(true));
        });
        removeBtns = document.querySelectorAll('.remove');
        removeBtns.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.removeFromCart(el, defaultData);
                this.header.update(defaultData, 'remove', el)
            });
        });
    }
  }
  addToCart(target: Element) {
    const itemCount = target.parentElement?.querySelector('.item-count');
    let counterCart = Number(target.parentElement?.querySelector('.item-count')?.innerHTML);
    const card: HTMLElement | null = target.closest('.card');
    if (itemCount) {
      counterCart++;
      itemCount.innerHTML = counterCart.toString();
    }
    if (card) {
      localStorage.setItem(String(card.dataset.id), String(counterCart))
      target.parentElement?.classList.remove('default');
    }
    this.render.addDisabled(target);
  }

  removeFromCart(target: Element, defaultData?: ICard[]) {
    const itemCount = target.parentElement?.querySelector('.item-count');
    let counterCart = Number(target.parentElement?.querySelector('.item-count')?.innerHTML);
    const card: HTMLElement | null = target.closest('.card');

    if (itemCount) {
      counterCart--;
      itemCount.innerHTML = counterCart.toString();
    }
    if (card) {
      localStorage.setItem(String(card.dataset.id), String(counterCart))
      target.parentElement?.classList.remove('default');
      if (counterCart === 0) {
        target.parentElement?.classList.add('default');
        localStorage.removeItem(String(card.dataset.id));
        const cart = <HTMLElement>document.querySelector('.cart-items');
        if (cart && defaultData) {
          const keys: (string | null)[] = [];
          for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
          }
          const items = defaultData.filter(e => keys.includes(String(e.id)));
          cart.innerHTML = '';
          this.render.items(items, cart, 'cart');
          const itemNumbers = document.querySelectorAll('.item-number');
          if (itemNumbers) {
            itemNumbers.forEach(el => el.classList.remove('hidden'));
          }
          this.addItemBtnsListeners(defaultData);
          if (items.length <= 0 && cart) {
            cart.innerHTML = 'Items not found';
          }
        }
      }
    }
    this.removeDisabled(target);
  }

  removeDisabled (target: Element) {
    const stock = Number(target.parentElement?.parentElement?.parentElement?.querySelector('.stock__num')?.innerHTML);
    const addBtn = target.parentElement?.querySelector('.add');
    if (stock > Number(target.parentElement?.querySelector('.item-count')?.innerHTML) && addBtn && addBtn.hasAttribute('disabled')) {
      addBtn.removeAttribute('disabled');
    }
  }
}