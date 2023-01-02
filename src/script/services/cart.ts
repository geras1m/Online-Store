export class Cart {

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