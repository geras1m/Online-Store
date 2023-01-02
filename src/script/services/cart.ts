import { ICard } from "../types";
import { Header } from "./header";

export class Cart {
  header: Header;

  constructor() {
    this.header = new Header();
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
                this.removeFromCart(el);
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
  }

  removeFromCart(target: Element) {
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
      }
    }
  }
}