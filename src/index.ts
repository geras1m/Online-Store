import {renderCards} from './script/store-page';
import {createCheckbox} from './script/create-filter';
import {sortCards} from './script/sort';
import {addActive} from './script/utility';

const categoryPath = <HTMLDivElement>document.querySelector('.category');
const brandPath = <HTMLDivElement>document.querySelector('.brand');
const sortBtns = document.querySelectorAll('.dropdown-item');

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

fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
        renderCards(data.products);
        createCheckbox(data.products, 'category', categoryPath);
        createCheckbox(data.products, 'brand', brandPath);
    });