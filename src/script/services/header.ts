import { ICard } from '../types';

export class Header {
  update(arr: ICard[], command: string, target: Element) {
    const cartItemsEl = document.querySelector('.cart__items');
    const TotalSumEl = document.querySelector('.cart-sum__number');
    const card: HTMLElement | null = target.closest('.card');
    let cartItems = Number(cartItemsEl?.innerHTML);
    let TotalSum = Number(TotalSumEl?.innerHTML);
    arr.forEach(el => {
      if (el.id === Number(card?.dataset.id)) {
        const finalPrice = Number(((el.price / 100) * (100 - el.discountPercentage)).toFixed(1));
        if (command === 'add') {
          TotalSum = TotalSum + finalPrice;
          cartItems += 1;
          console.log(Number(localStorage.getItem(String(el.id))));
        } else if (command === 'remove') {
          TotalSum = TotalSum - finalPrice;
          cartItems -= 1;
          console.log(Number(localStorage.getItem(String(el.id))));
        }
      }
    })
    if (!localStorage.length) {
      TotalSum = 0;
      cartItems = 0;
    }
    if (cartItemsEl && TotalSumEl) {
      cartItemsEl.innerHTML = String(cartItems);
      TotalSumEl.innerHTML = String(TotalSum.toFixed(1));
    }
  }
}