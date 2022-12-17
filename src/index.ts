import {renderCards} from './script/store-page';
import {createFilter} from './script/create-filter';

fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
        renderCards(data.products);
        createFilter(data.products);
    });
