import {renderCards} from './script/store-page';

fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
        renderCards(data.products);
    });