import {renderCards} from './script/store-page';
import {createCheckbox} from './script/create-filter';
import {sortCards} from './script/sort';

const categoryPath = <HTMLDivElement>document.querySelector('.category');
const brandPath = <HTMLDivElement>document.querySelector('.brand');
const sortBtns = document.querySelectorAll('.dropdown-item');

sortBtns.forEach(element => {
    element.addEventListener('click', (event) => {
        if ((event.target as Element).classList.contains('price')) {
            console.log('price')
            sortCards('.price', 'asc');
        }
    })
});

fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
        renderCards(data.products);
        createCheckbox(data.products, 'category', categoryPath);
        createCheckbox(data.products, 'brand', brandPath);
    });