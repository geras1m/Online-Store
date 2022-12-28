export class Cart {
  
  addToCart(target: Element) {
    const itemCount = target.parentElement?.querySelector('.item-count');
    let counter = Number(target.parentElement?.querySelector('.item-count')?.innerHTML);
    const card: HTMLElement | null = target.closest('.card');
    if (itemCount) {
      counter++;
      itemCount.innerHTML = counter.toString();
    }
    if (card) {
      localStorage.setItem(String(card.dataset.id), String(counter))
      target.parentElement?.classList.remove('default');
    }
  }

  removeFromCart(target: Element) {
    const itemCount = target.parentElement?.querySelector('.item-count');
    let counter = Number(target.parentElement?.querySelector('.item-count')?.innerHTML);
    const card: HTMLElement | null = target.closest('.card');
    if (itemCount) {
      counter--;
      itemCount.innerHTML = counter.toString();
    }
    if (card) {
      localStorage.setItem(String(card.dataset.id), String(counter))
      target.parentElement?.classList.remove('default');
      if (counter === 0) {
        target.parentElement?.classList.add('default');
        localStorage.removeItem(String(card.dataset.id));
      }
    }
  }
}