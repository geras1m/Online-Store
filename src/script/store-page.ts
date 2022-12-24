import {ICard} from '../types';
export const CARDS_BOX = <HTMLDivElement>document.querySelector('.items-cards');
export function renderCards(data: ICard[]) {

    for (let i = 0; i < data.length; i++){
        const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
        const card = `<div class="card h-100" data-id = '${data[i].id}' data-price = "${finalPrice}" data-rating = "${data[i].rating}" data-discount = "${data[i].discountPercentage}">
                  <img src="${data[i].thumbnail}" class="img-thumbnail" alt="Card image">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="text-muted card-text">
                    <small class="stock">In stock: ${data[i].stock}</small>
                    <p>
                      <small class="text-muted category">${data[i].category},</small>
                      <small class="text-muted brand">${data[i].brand},</small>
                      <small class="text-muted rating">${data[i].rating}★</small>
                    </p>
                    <p>
                      <small class="text-muted description hidden">${data[i].description}</small>
                    </p>
                    <p class="text-end">
                      <span class="price">€${data[i].price}</span>
                      <small class="text-muted sale">-${data[i].discountPercentage}%</small>
                      €<span class="final-price h4">${finalPrice}</span>
                      <button type="button" class="btn add">+Add to cart</button>
                    </p>
                    </p>
                  </div>
                </div>`;
        CARDS_BOX.insertAdjacentHTML('beforeend', card);
    }
}
