import { ICard } from '../types';

export class Header {
  update(arr: ICard[], command: string, target: Element) {
    const cartItemsEl = document.querySelectorAll('.cart__items');
    const TotalSumEl = document.querySelectorAll('.cart-sum__number');
    const card: HTMLElement | null = target.closest('.card');
    const finalSumElem = document.querySelector('.cart-sum__number__final');
    let finalSum = Number(finalSumElem?.innerHTML);
    const totalSaleElem = document.querySelector('.cart-total-sale');
    const totalSaleNum = Number(totalSaleElem?.innerHTML);
    let cartItems = Number(cartItemsEl[0].innerHTML);
    let TotalSum = Number(TotalSumEl[0].innerHTML);
    arr.forEach(el => {
      if (el.id === Number(card?.dataset.id)) {
        const finalPrice = Number(((el.price / 100) * (100 - el.discountPercentage)).toFixed(1));
        if (command === 'add') {
          TotalSum = TotalSum + finalPrice;
          cartItems += 1;
          finalSum = TotalSum - ((TotalSum / 100) * totalSaleNum);
        } else if (command === 'remove') {
          TotalSum = TotalSum - finalPrice;
          cartItems -= 1;
          finalSum = TotalSum - ((TotalSum / 100) * totalSaleNum);
        }
      }
    })
    if (!localStorage.length) {
      TotalSum = 0;
      cartItems = 0;
    }
    if (cartItemsEl && TotalSumEl) {
      cartItemsEl.forEach(el => el.innerHTML = String(cartItems))
      TotalSumEl.forEach(el => el.innerHTML = String(TotalSum.toFixed(1)))
      if (finalSumElem && Number(finalSumElem.innerHTML) > 0) finalSumElem.innerHTML = finalSum.toString();
    }
  }
}