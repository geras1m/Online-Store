import {renderCards} from './script/store-page';
import {filterData} from './script/filter-function';
import {ICard} from "./types";
export let defaultData: Readonly<ICard[]>;


import {createCheckbox} from './script/create-filter';
import { changeView, viewChange } from './script/view-change';
import { sort, sortCards, urlParams } from './script/sort';


const categoryPath = <HTMLDivElement>document.querySelector('.category');
const brandPath = <HTMLDivElement>document.querySelector('.brand');
const addressSort = urlParams.get('sort');
const addressView = urlParams.get('view');

sort();
viewChange();

fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
        defaultData = data.products;
        renderCards(data.products);
        createCheckbox(data.products, 'category', categoryPath);
        createCheckbox(data.products, 'brand', brandPath);
        filterData();
        if (addressSort) {
            const array = addressSort.toString().split("-");
            sortCards(array[0], array[1]);
        }
        if (addressView) {
            changeView(addressView);
        }
    });
