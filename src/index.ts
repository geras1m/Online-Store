import {renderCards} from './script/store-page';
import {createFilter} from './script/create-filter';
import {filterData} from './script/filter-function';
import {ICard} from "./types";
export let defaultData: Readonly<ICard[]>;



fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
        defaultData = data.products;
        renderCards(data.products);
        createFilter(data.products);
        filterData();
    });
