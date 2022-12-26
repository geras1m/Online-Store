import { MainPageView } from './script/pages/MainPageView';

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
