import { addQueryParam } from './querySet';
import {addActive} from './utility';

const cardBlock = <HTMLDivElement>document.querySelector(".items-cards");
const sortBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.dropdown-item');
export const urlParams = new URLSearchParams(window.location.search);

export function sortCards(arg: string, order: string) {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
  const data: (string | undefined)[] = [];
  const result: HTMLElement[] = [];
  if (arg === 'price') {
    cards.forEach(card => {
      data.push(card.dataset.price);
    });
  } else if (arg === 'rating') {
    cards.forEach(card => {
      data.push(card.dataset.rating);
    });
  } else {
    cards.forEach(card => {
      data.push(card.dataset.discount);
    });
  }
  const numbers: number[] = data.map(el => Number(el));
  const sortedNumbers = numbers.sort((a, b) =>  a-b);
  if (order === 'des') {
    sortedNumbers.reverse();
  }
  sortedNumbers.forEach(el => {
    for (let i = 0; i < data.length; i++) {
      if (String(el) === data[i]) {
        let flag = true;
        if (result.length > 0) {
          result.forEach(el => {
            if (el.dataset.id === cards[i].dataset.id) {
              flag = false;
            }
          });
        }
        if (flag) {
          result.push(cards[i]);
          return;
        }
      }
    }
  });

  cardBlock.innerHTML = '';
  result.forEach( el => {
    cardBlock.innerHTML += el.outerHTML;
  });
  addQueryParam('sort', `${arg}-${order}`);
}

export function sort() {
  sortBtns.forEach(element => {
    element.addEventListener('click', (event) => {
        let order = 'asc';
        let param = 'discount';
        if ((event.target as Element).classList.contains('des')) {
            order = 'des';
        }
        if ((event.target as Element).classList.contains('price')) {
            param = 'price';
        } else if ((event.target as Element).classList.contains('rating')) {
            param = 'rating';
        }
        addActive(event.target as Element)
        sortCards(param, order);
    })
});
}
