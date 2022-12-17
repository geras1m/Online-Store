import {renderCards} from './script/store-page';
import {filterData} from './script/filter-function';
import {ICard} from "./types";
export let defaultData: Readonly<ICard[]>;


import {createCheckbox} from './script/create-filter';

const categoryPath = <HTMLDivElement>document.querySelector('.category');
const brandPath = <HTMLDivElement>document.querySelector('.brand');

fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
        defaultData = data.products;
        renderCards(data.products);
        createCheckbox(data.products, 'category', categoryPath);
        createCheckbox(data.products, 'brand', brandPath);
        filterData();
    });
