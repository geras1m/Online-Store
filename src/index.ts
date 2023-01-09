import Config from '../src/script/router/config';
import Router from '../src/script/router/router';

const routes = Config.getRoutes();
Router.addAllPath(routes);

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
