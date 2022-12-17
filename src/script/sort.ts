const cardBlock = <HTMLDivElement>document.querySelector(".items-cards");

// function comparator(a: HTMLElement, b: HTMLElement) {
//   if (a.dataset.price < b.dataset.price)
//     return -1;
//   if (a.dataset.price > b.dataset.price)
//     return 1;
//   return 0;
// }

// export function sort(target: string) {
//   if (target.includes('price')) {
//     cardBlock.innerHTML = '';
//     const cards = document.querySelectorAll('[data-price]');
//     let array: HTMLElement[] = Array.from(cards);
//     let sorted: HTMLElement[] = array.sort(comparator);
//     sorted.forEach(e =>
//       cardBlock.innerHTML += e);
//   }
// }

// export function sortCards(arg: string, order: string) {
//   const cards  = NodeListOf<HTMLInputElement>document.querySelectorAll('.card');
//   const array = Array.from(cards);
//   array.sort(function(a, b) {
//     const an: number = parseInt((a.dataset.price)),
//       bn: number = parseInt((b.dataset.price));
//     if (order === 'asc') {
//       if (an > bn)
//         return 1;
//       if (an < bn)
//         return -1;
//     } else if (order === 'desc') {
//       if (an < bn)
//         return 1;
//       if (an > bn)
//         return -1;
//     }
//     return 0;
//   });
//   cardBlock.innerHTML === array.toString();
// }

export function sortCards(arg: string, order: string) {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
  const data: (string | undefined)[] = [];
  const result: HTMLElement[] = [];
  cards.forEach(card => {
    data.push(card.dataset.price);
  });
  const numbers: number[] = data.map(el => Number(el));
  const sortedNumbers = numbers.sort((a, b) =>  a-b);
  sortedNumbers.forEach(el => {
    for (let i = 0; i < data.length; i++) {
      if (String(el) === data[i]) {
        let flag = true;
        if (result.length > 0) {
          result.forEach(el => {
            console.log(el.dataset.id);
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