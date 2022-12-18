const cardBlock = <HTMLDivElement>document.querySelector(".items-cards");

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
}