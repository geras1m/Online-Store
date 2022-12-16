import {ICard} from '../types';

export function renderCards(data: ICard[]) {
    const CARDS_BOX = <HTMLDivElement>document.querySelector('.items-cards');

    for (let i = 0; i < data.length; i++){
        const card = `<div class="card h-100" data-id = '${data[i].id}'>
                  <img src="${data[i].thumbnail}" class="card-img-top" alt="Card image">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">
                      <small class="text-muted category">${data[i].category}</small>,
                      <small class="text-muted brand">${data[i].brand}</small>,
                      <small class="text-muted rating">${data[i].rating}</small>★
                    </p>
                    <p class="card-text text-end">
                      <span class="price">${data[i].price}</span>
                      <small class="text-muted sale">-10%</small>
                      <span class="final-price h3">€90</span>
                    </p>
                  </div>
                </div>`;
        CARDS_BOX.insertAdjacentHTML('beforeend', card);
    }
}

