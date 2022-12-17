/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/create-filter.ts":
/*!*************************************!*\
  !*** ./src/script/create-filter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFilter = void 0;
function createFilter(data) {
    const category = document.querySelector('.category');
    const brand = document.querySelector('.brand');
    const categoryList = [];
    const brandList = [];
    for (let i = 0; i < data.length; i++) {
        if (!categoryList.includes(data[i].category)) {
            categoryList.push(String(data[i].category));
        }
        if (!brandList.includes(data[i].brand)) {
            brandList.push(String(data[i].brand));
        }
    }
    for (let i = 0; i < categoryList.length; i++) {
        const checkboxCategory = `<div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="category-${categoryList[i]}">
      <label class="form-check-label" for="category-${categoryList[i]}">
      ${categoryList[i]}
      </label>
    </div>`;
        category.innerHTML += checkboxCategory;
    }
    for (let i = 0; i < brandList.length; i++) {
        const checkboxBrand = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="brand-${brandList[i]}">
    <label class="form-check-label" for="brand-${brandList[i]}">
      ${brandList[i]}
    </label>
  </div>`;
        brand.innerHTML += checkboxBrand;
    }
}
exports.createFilter = createFilter;


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
        const finalPrice = Math.round((data[i].price / 100) * data[i].discountPercentage);
        const card = `<div class="card h-100" data-id = '${data[i].id}'>
                  <img src="${data[i].thumbnail}" class="img-thumbnail" alt="Card image">
                  <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">
                      <small class="text-muted category">${data[i].category}</small>,
                      <small class="text-muted brand">${data[i].brand}</small>,
                      <small class="text-muted rating">${data[i].rating}</small>★
                    </p>
                    <p class="card-text text-end">
                      <span class="price">€${data[i].price}</span>
                      <small class="text-muted sale">-${data[i].discountPercentage}%</small>
                      <span class="final-price h3">€${finalPrice}</span>
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
fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
    (0, store_page_1.renderCards)(data.products);
    (0, create_filter_1.createFilter)(data.products);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSw4RUFBOEUsZ0JBQWdCO0FBQzlGLHNEQUFzRCxnQkFBZ0I7QUFDdEUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGLGlEQUFpRCxhQUFhO0FBQzlELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQ25DUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSwyREFBMkQsV0FBVztBQUN0RSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQSwyREFBMkQsaUJBQWlCO0FBQzVFLHdEQUF3RCxjQUFjO0FBQ3RFLHlEQUF5RCxlQUFlO0FBQ3hFO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRCx3REFBd0QsMkJBQTJCO0FBQ25GLHNEQUFzRCxXQUFXO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7OztVQzFCbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsd0JBQXdCLG1CQUFPLENBQUMsNkRBQXdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdC9jcmVhdGUtZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHQvc3RvcmUtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVGaWx0ZXIgPSB2b2lkIDA7XG5mdW5jdGlvbiBjcmVhdGVGaWx0ZXIoZGF0YSkge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5Jyk7XG4gICAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJhbmQnKTtcbiAgICBjb25zdCBjYXRlZ29yeUxpc3QgPSBbXTtcbiAgICBjb25zdCBicmFuZExpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFjYXRlZ29yeUxpc3QuaW5jbHVkZXMoZGF0YVtpXS5jYXRlZ29yeSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5TGlzdC5wdXNoKFN0cmluZyhkYXRhW2ldLmNhdGVnb3J5KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFicmFuZExpc3QuaW5jbHVkZXMoZGF0YVtpXS5icmFuZCkpIHtcbiAgICAgICAgICAgIGJyYW5kTGlzdC5wdXNoKFN0cmluZyhkYXRhW2ldLmJyYW5kKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hDYXRlZ29yeSA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiXCIgaWQ9XCJjYXRlZ29yeS0ke2NhdGVnb3J5TGlzdFtpXX1cIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJjYXRlZ29yeS0ke2NhdGVnb3J5TGlzdFtpXX1cIj5cbiAgICAgICR7Y2F0ZWdvcnlMaXN0W2ldfVxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5gO1xuICAgICAgICBjYXRlZ29yeS5pbm5lckhUTUwgKz0gY2hlY2tib3hDYXRlZ29yeTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicmFuZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hCcmFuZCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiYnJhbmQtJHticmFuZExpc3RbaV19XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJyYW5kLSR7YnJhbmRMaXN0W2ldfVwiPlxuICAgICAgJHticmFuZExpc3RbaV19XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+YDtcbiAgICAgICAgYnJhbmQuaW5uZXJIVE1MICs9IGNoZWNrYm94QnJhbmQ7XG4gICAgfVxufVxuZXhwb3J0cy5jcmVhdGVGaWx0ZXIgPSBjcmVhdGVGaWx0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVuZGVyQ2FyZHMgPSB2b2lkIDA7XG5mdW5jdGlvbiByZW5kZXJDYXJkcyhkYXRhKSB7XG4gICAgY29uc3QgQ0FSRFNfQk9YID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWNhcmRzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsUHJpY2UgPSBNYXRoLnJvdW5kKChkYXRhW2ldLnByaWNlIC8gMTAwKSAqIGRhdGFbaV0uZGlzY291bnRQZXJjZW50YWdlKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMFwiIGRhdGEtaWQgPSAnJHtkYXRhW2ldLmlkfSc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YVtpXS50aHVtYm5haWx9XCIgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgYWx0PVwiQ2FyZCBpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtkYXRhW2ldLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBjYXRlZ29yeVwiPiR7ZGF0YVtpXS5jYXRlZ29yeX08L3NtYWxsPixcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIGJyYW5kXCI+JHtkYXRhW2ldLmJyYW5kfTwvc21hbGw+LFxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgcmF0aW5nXCI+JHtkYXRhW2ldLnJhdGluZ308L3NtYWxsPuKYhVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPuKCrCR7ZGF0YVtpXS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBzYWxlXCI+LSR7ZGF0YVtpXS5kaXNjb3VudFBlcmNlbnRhZ2V9JTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaW5hbC1wcmljZSBoM1wiPuKCrCR7ZmluYWxQcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIENBUkRTX0JPWC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNhcmQpO1xuICAgIH1cbn1cbmV4cG9ydHMucmVuZGVyQ2FyZHMgPSByZW5kZXJDYXJkcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0b3JlX3BhZ2VfMSA9IHJlcXVpcmUoXCIuL3NjcmlwdC9zdG9yZS1wYWdlXCIpO1xuY29uc3QgY3JlYXRlX2ZpbHRlcl8xID0gcmVxdWlyZShcIi4vc2NyaXB0L2NyZWF0ZS1maWx0ZXJcIik7XG5mZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzP2xpbWl0PTEwMCcpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICgwLCBzdG9yZV9wYWdlXzEucmVuZGVyQ2FyZHMpKGRhdGEucHJvZHVjdHMpO1xuICAgICgwLCBjcmVhdGVfZmlsdGVyXzEuY3JlYXRlRmlsdGVyKShkYXRhLnByb2R1Y3RzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9