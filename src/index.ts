import {renderCards} from './script/store-page';
import {filterData} from './script/filter-function';
import {ICard} from "./types";
import {createCheckbox} from './script/create-filter';
import { changeView, viewChange } from './script/view-change';
import { sort, sortCards, urlParams } from './script/sort';
import { MainPageView } from './script/pages/MainPageView';

const addressSort = urlParams.get('sort');
const addressView = urlParams.get('view');

export let defaultData: Readonly<ICard[]>;


const page = new MainPageView;

page.loadData();

// fetch('https://dummyjson.com/products?limit=100')
//     .then(response => response.json())
//     .then(data => {
//         defaultData = data.products;
//         if (addressSort) {
//             const array = addressSort.toString().split("-");
//             sortCards(array[0], array[1]);
//         }
//         if (addressView) {
//             changeView(addressView);
//         }
//     });
