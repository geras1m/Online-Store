/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/create-filter.ts":
/*!*************************************!*\
  !*** ./src/script/create-filter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCheckbox = void 0;
function createCheckbox(data, attribute, path) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        let current = data[i].category;
        if (attribute === 'brand') {
            current = data[i].brand;
        }
        if (!result.includes(current)) {
            result.push(String(current));
        }
    }
    for (let i = 0; i < result.length; i++) {
        const checkbox = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="${result[i]}">
    <label class="form-check-label" for="${result[i]}">
      ${result[i]}
    </label>
    </div>`;
        path.innerHTML += checkbox;
    }
}
exports.createCheckbox = createCheckbox;


/***/ }),

/***/ "./src/script/sort.ts":
/*!****************************!*\
  !*** ./src/script/sort.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sortCards = void 0;
const cardBlock = document.querySelector(".items-cards");
// function comparator(a: HTMLElement, b: HTMLElement) {
//   if (a.dataset.price < b.dataset.price)
//     return -1;
//   if (a.dataset.price > b.dataset.price)
//     return 1;
//   return 0;
// }
// export function sort(target: string) {
//   if (target.includes('price')) {
//     cardBlock.innerHTML = '';
//     const cards = document.querySelectorAll('[data-price]');
//     let array: HTMLElement[] = Array.from(cards);
//     let sorted: HTMLElement[] = array.sort(comparator);
//     sorted.forEach(e =>
//       cardBlock.innerHTML += e);
//   }
// }
// export function sortCards(arg: string, order: string) {
//   const cards  = NodeListOf<HTMLInputElement>document.querySelectorAll('.card');
//   const array = Array.from(cards);
//   array.sort(function(a, b) {
//     const an: number = parseInt((a.dataset.price)),
//       bn: number = parseInt((b.dataset.price));
//     if (order === 'asc') {
//       if (an > bn)
//         return 1;
//       if (an < bn)
//         return -1;
//     } else if (order === 'desc') {
//       if (an < bn)
//         return 1;
//       if (an > bn)
//         return -1;
//     }
//     return 0;
//   });
//   cardBlock.innerHTML === array.toString();
// }
function sortCards(arg, order) {
    const cards = document.querySelectorAll('.card');
    const data = [];
    const result = [];
    cards.forEach(card => {
        data.push(card.dataset.price);
    });
    const numbers = data.map(el => Number(el));
    const sortedNumbers = numbers.sort((a, b) => a - b);
    sortedNumbers.forEach(el => {
        for (let i = 0; i < data.length; i++) {
            if (String(el) === data[i]) {
                let flag = true;
                if (result.length > 0) {
                    result.forEach(el => {
                        console.log(el.dataset.id);
                        if (el.dataset.id === cards[i].dataset.id) {
                            flag = false;
                        }
                    });
                }
                if (flag) {
                    result.push(cards[i]);
                    return;
                }
            }
        }
    });
    cardBlock.innerHTML = '';
    result.forEach(el => {
        cardBlock.innerHTML += el.outerHTML;
    });
}
exports.sortCards = sortCards;


/***/ }),

/***/ "./src/script/store-page.ts":
/*!**********************************!*\
  !*** ./src/script/store-page.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderCards = void 0;
function renderCards(data) {
    const CARDS_BOX = document.querySelector('.items-cards');
    for (let i = 0; i < data.length; i++) {
        const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
        const card = `<div class="card h-100" data-id = '${data[i].id}' data-price = "${data[i].price}">
                  <img src="${data[i].thumbnail}" class="img-thumbnail" alt="Card image">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">
                      <small class="text-muted category">${data[i].category},</small>
                      <small class="text-muted brand">${data[i].brand},</small>
                      <small class="text-muted rating">${data[i].rating}★</small>
                    </p>
                    <p class="card-text"> In stock:
                    <span class="stock">${data[i].stock}</span>
                    </p>
                    <p class="card-text text-end">
                      <span class="price"">€${data[i].price}</span>
                      <small class="text-muted sale">-${data[i].discountPercentage}%</small>
                      €<span class="final-price h3">${finalPrice}</span>
                    </p>
                  </div>
                </div>`;
        CARDS_BOX.insertAdjacentHTML('beforeend', card);
    }
}
exports.renderCards = renderCards;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const store_page_1 = __webpack_require__(/*! ./script/store-page */ "./src/script/store-page.ts");
const create_filter_1 = __webpack_require__(/*! ./script/create-filter */ "./src/script/create-filter.ts");
const sort_1 = __webpack_require__(/*! ./script/sort */ "./src/script/sort.ts");
const categoryPath = document.querySelector('.category');
const brandPath = document.querySelector('.brand');
const sortBtns = document.querySelectorAll('.dropdown-item');
sortBtns.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.classList.contains('price')) {
            console.log('price');
            (0, sort_1.sortCards)('.price', 'asc');
        }
    });
});
fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
    (0, store_page_1.renderCards)(data.products);
    (0, create_filter_1.createCheckbox)(data.products, 'category', categoryPath);
    (0, create_filter_1.createCheckbox)(data.products, 'brand', brandPath);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBLG1FQUFtRSxVQUFVO0FBQzdFLDJDQUEyQyxVQUFVO0FBQ3JELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOzs7Ozs7Ozs7OztBQ3hCVDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQzNFSjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSwyREFBMkQsV0FBVyxrQkFBa0IsY0FBYztBQUN0Ryw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQSwyREFBMkQsaUJBQWlCO0FBQzVFLHdEQUF3RCxjQUFjO0FBQ3RFLHlEQUF5RCxlQUFlO0FBQ3hFO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsd0RBQXdELDJCQUEyQjtBQUNuRixzREFBc0QsV0FBVztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7VUM3Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCLG1CQUFPLENBQUMsdURBQXFCO0FBQ2xELHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RCxlQUFlLG1CQUFPLENBQUMsMkNBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdC9jcmVhdGUtZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHQvc29ydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0L3N0b3JlLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlQ2hlY2tib3ggPSB2b2lkIDA7XG5mdW5jdGlvbiBjcmVhdGVDaGVja2JveChkYXRhLCBhdHRyaWJ1dGUsIHBhdGgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkYXRhW2ldLmNhdGVnb3J5O1xuICAgICAgICBpZiAoYXR0cmlidXRlID09PSAnYnJhbmQnKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gZGF0YVtpXS5icmFuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nKGN1cnJlbnQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiJHtyZXN1bHRbaV19XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cIiR7cmVzdWx0W2ldfVwiPlxuICAgICAgJHtyZXN1bHRbaV19XG4gICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5gO1xuICAgICAgICBwYXRoLmlubmVySFRNTCArPSBjaGVja2JveDtcbiAgICB9XG59XG5leHBvcnRzLmNyZWF0ZUNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc29ydENhcmRzID0gdm9pZCAwO1xuY29uc3QgY2FyZEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtcy1jYXJkc1wiKTtcbi8vIGZ1bmN0aW9uIGNvbXBhcmF0b3IoYTogSFRNTEVsZW1lbnQsIGI6IEhUTUxFbGVtZW50KSB7XG4vLyAgIGlmIChhLmRhdGFzZXQucHJpY2UgPCBiLmRhdGFzZXQucHJpY2UpXG4vLyAgICAgcmV0dXJuIC0xO1xuLy8gICBpZiAoYS5kYXRhc2V0LnByaWNlID4gYi5kYXRhc2V0LnByaWNlKVxuLy8gICAgIHJldHVybiAxO1xuLy8gICByZXR1cm4gMDtcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBzb3J0KHRhcmdldDogc3RyaW5nKSB7XG4vLyAgIGlmICh0YXJnZXQuaW5jbHVkZXMoJ3ByaWNlJykpIHtcbi8vICAgICBjYXJkQmxvY2suaW5uZXJIVE1MID0gJyc7XG4vLyAgICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcmljZV0nKTtcbi8vICAgICBsZXQgYXJyYXk6IEhUTUxFbGVtZW50W10gPSBBcnJheS5mcm9tKGNhcmRzKTtcbi8vICAgICBsZXQgc29ydGVkOiBIVE1MRWxlbWVudFtdID0gYXJyYXkuc29ydChjb21wYXJhdG9yKTtcbi8vICAgICBzb3J0ZWQuZm9yRWFjaChlID0+XG4vLyAgICAgICBjYXJkQmxvY2suaW5uZXJIVE1MICs9IGUpO1xuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gc29ydENhcmRzKGFyZzogc3RyaW5nLCBvcmRlcjogc3RyaW5nKSB7XG4vLyAgIGNvbnN0IGNhcmRzICA9IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuLy8gICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oY2FyZHMpO1xuLy8gICBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbi8vICAgICBjb25zdCBhbjogbnVtYmVyID0gcGFyc2VJbnQoKGEuZGF0YXNldC5wcmljZSkpLFxuLy8gICAgICAgYm46IG51bWJlciA9IHBhcnNlSW50KChiLmRhdGFzZXQucHJpY2UpKTtcbi8vICAgICBpZiAob3JkZXIgPT09ICdhc2MnKSB7XG4vLyAgICAgICBpZiAoYW4gPiBibilcbi8vICAgICAgICAgcmV0dXJuIDE7XG4vLyAgICAgICBpZiAoYW4gPCBibilcbi8vICAgICAgICAgcmV0dXJuIC0xO1xuLy8gICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdkZXNjJykge1xuLy8gICAgICAgaWYgKGFuIDwgYm4pXG4vLyAgICAgICAgIHJldHVybiAxO1xuLy8gICAgICAgaWYgKGFuID4gYm4pXG4vLyAgICAgICAgIHJldHVybiAtMTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIDA7XG4vLyAgIH0pO1xuLy8gICBjYXJkQmxvY2suaW5uZXJIVE1MID09PSBhcnJheS50b1N0cmluZygpO1xuLy8gfVxuZnVuY3Rpb24gc29ydENhcmRzKGFyZywgb3JkZXIpIHtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGRhdGEucHVzaChjYXJkLmRhdGFzZXQucHJpY2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IG51bWJlcnMgPSBkYXRhLm1hcChlbCA9PiBOdW1iZXIoZWwpKTtcbiAgICBjb25zdCBzb3J0ZWROdW1iZXJzID0gbnVtYmVycy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgc29ydGVkTnVtYmVycy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nKGVsKSA9PT0gZGF0YVtpXSkge1xuICAgICAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWwuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuZGF0YXNldC5pZCA9PT0gY2FyZHNbaV0uZGF0YXNldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNhcmRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNhcmRCbG9jay5pbm5lckhUTUwgPSAnJztcbiAgICByZXN1bHQuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGNhcmRCbG9jay5pbm5lckhUTUwgKz0gZWwub3V0ZXJIVE1MO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zb3J0Q2FyZHMgPSBzb3J0Q2FyZHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVuZGVyQ2FyZHMgPSB2b2lkIDA7XG5mdW5jdGlvbiByZW5kZXJDYXJkcyhkYXRhKSB7XG4gICAgY29uc3QgQ0FSRFNfQk9YID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWNhcmRzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsUHJpY2UgPSAoKGRhdGFbaV0ucHJpY2UgLyAxMDApICogKDEwMCAtIGRhdGFbaV0uZGlzY291bnRQZXJjZW50YWdlKSkudG9GaXhlZCgxKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMFwiIGRhdGEtaWQgPSAnJHtkYXRhW2ldLmlkfScgZGF0YS1wcmljZSA9IFwiJHtkYXRhW2ldLnByaWNlfVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGFbaV0udGh1bWJuYWlsfVwiIGNsYXNzPVwiaW1nLXRodW1ibmFpbFwiIGFsdD1cIkNhcmQgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZGF0YVtpXS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgY2F0ZWdvcnlcIj4ke2RhdGFbaV0uY2F0ZWdvcnl9LDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBicmFuZFwiPiR7ZGF0YVtpXS5icmFuZH0sPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIHJhdGluZ1wiPiR7ZGF0YVtpXS5yYXRpbmd94piFPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiBJbiBzdG9jazpcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdG9ja1wiPiR7ZGF0YVtpXS5zdG9ja308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCJcIj7igqwke2RhdGFbaV0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgc2FsZVwiPi0ke2RhdGFbaV0uZGlzY291bnRQZXJjZW50YWdlfSU8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIOKCrDxzcGFuIGNsYXNzPVwiZmluYWwtcHJpY2UgaDNcIj4ke2ZpbmFsUHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICBDQVJEU19CT1guaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjYXJkKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbmRlckNhcmRzID0gcmVuZGVyQ2FyZHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdG9yZV9wYWdlXzEgPSByZXF1aXJlKFwiLi9zY3JpcHQvc3RvcmUtcGFnZVwiKTtcbmNvbnN0IGNyZWF0ZV9maWx0ZXJfMSA9IHJlcXVpcmUoXCIuL3NjcmlwdC9jcmVhdGUtZmlsdGVyXCIpO1xuY29uc3Qgc29ydF8xID0gcmVxdWlyZShcIi4vc2NyaXB0L3NvcnRcIik7XG5jb25zdCBjYXRlZ29yeVBhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKTtcbmNvbnN0IGJyYW5kUGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmFuZCcpO1xuY29uc3Qgc29ydEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbScpO1xuc29ydEJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmljZScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJpY2UnKTtcbiAgICAgICAgICAgICgwLCBzb3J0XzEuc29ydENhcmRzKSgnLnByaWNlJywgJ2FzYycpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgKDAsIHN0b3JlX3BhZ2VfMS5yZW5kZXJDYXJkcykoZGF0YS5wcm9kdWN0cyk7XG4gICAgKDAsIGNyZWF0ZV9maWx0ZXJfMS5jcmVhdGVDaGVja2JveCkoZGF0YS5wcm9kdWN0cywgJ2NhdGVnb3J5JywgY2F0ZWdvcnlQYXRoKTtcbiAgICAoMCwgY3JlYXRlX2ZpbHRlcl8xLmNyZWF0ZUNoZWNrYm94KShkYXRhLnByb2R1Y3RzLCAnYnJhbmQnLCBicmFuZFBhdGgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=