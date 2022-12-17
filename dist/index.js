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
        const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
        const card = `<div class="card h-100" data-id = '${data[i].id}'>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSw4RUFBOEUsZ0JBQWdCO0FBQzlGLHNEQUFzRCxnQkFBZ0I7QUFDdEUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGLGlEQUFpRCxhQUFhO0FBQzlELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQ25DUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSwyREFBMkQsV0FBVztBQUN0RSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQSwyREFBMkQsaUJBQWlCO0FBQzVFLHdEQUF3RCxjQUFjO0FBQ3RFLHlEQUF5RCxlQUFlO0FBQ3hFO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Qsd0RBQXdELDJCQUEyQjtBQUNuRixzREFBc0QsV0FBVztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7VUM3Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCLG1CQUFPLENBQUMsdURBQXFCO0FBQ2xELHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHQvY3JlYXRlLWZpbHRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0L3N0b3JlLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlRmlsdGVyID0gdm9pZCAwO1xuZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGRhdGEpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeScpO1xuICAgIGNvbnN0IGJyYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyYW5kJyk7XG4gICAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW107XG4gICAgY29uc3QgYnJhbmRMaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghY2F0ZWdvcnlMaXN0LmluY2x1ZGVzKGRhdGFbaV0uY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBjYXRlZ29yeUxpc3QucHVzaChTdHJpbmcoZGF0YVtpXS5jYXRlZ29yeSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYnJhbmRMaXN0LmluY2x1ZGVzKGRhdGFbaV0uYnJhbmQpKSB7XG4gICAgICAgICAgICBicmFuZExpc3QucHVzaChTdHJpbmcoZGF0YVtpXS5icmFuZCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcnlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q2F0ZWdvcnkgPSBgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiY2F0ZWdvcnktJHtjYXRlZ29yeUxpc3RbaV19XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiY2F0ZWdvcnktJHtjYXRlZ29yeUxpc3RbaV19XCI+XG4gICAgICAke2NhdGVnb3J5TGlzdFtpXX1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+YDtcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJIVE1MICs9IGNoZWNrYm94Q2F0ZWdvcnk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnJhbmRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94QnJhbmQgPSBgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImJyYW5kLSR7YnJhbmRMaXN0W2ldfVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJicmFuZC0ke2JyYW5kTGlzdFtpXX1cIj5cbiAgICAgICR7YnJhbmRMaXN0W2ldfVxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PmA7XG4gICAgICAgIGJyYW5kLmlubmVySFRNTCArPSBjaGVja2JveEJyYW5kO1xuICAgIH1cbn1cbmV4cG9ydHMuY3JlYXRlRmlsdGVyID0gY3JlYXRlRmlsdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbmRlckNhcmRzID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVuZGVyQ2FyZHMoZGF0YSkge1xuICAgIGNvbnN0IENBUkRTX0JPWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1jYXJkcycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaW5hbFByaWNlID0gKChkYXRhW2ldLnByaWNlIC8gMTAwKSAqICgxMDAgLSBkYXRhW2ldLmRpc2NvdW50UGVyY2VudGFnZSkpLnRvRml4ZWQoMSk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBgPGRpdiBjbGFzcz1cImNhcmQgaC0xMDBcIiBkYXRhLWlkID0gJyR7ZGF0YVtpXS5pZH0nPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhdGFbaV0udGh1bWJuYWlsfVwiIGNsYXNzPVwiaW1nLXRodW1ibmFpbFwiIGFsdD1cIkNhcmQgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZGF0YVtpXS50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgY2F0ZWdvcnlcIj4ke2RhdGFbaV0uY2F0ZWdvcnl9LDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBicmFuZFwiPiR7ZGF0YVtpXS5icmFuZH0sPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIHJhdGluZ1wiPiR7ZGF0YVtpXS5yYXRpbmd94piFPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPiBJbiBzdG9jazpcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdG9ja1wiPiR7ZGF0YVtpXS5zdG9ja308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgdGV4dC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+4oKsJHtkYXRhW2ldLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIHNhbGVcIj4tJHtkYXRhW2ldLmRpc2NvdW50UGVyY2VudGFnZX0lPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbmFsLXByaWNlIGgzXCI+4oKsJHtmaW5hbFByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgQ0FSRFNfQk9YLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY2FyZCk7XG4gICAgfVxufVxuZXhwb3J0cy5yZW5kZXJDYXJkcyA9IHJlbmRlckNhcmRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3RvcmVfcGFnZV8xID0gcmVxdWlyZShcIi4vc2NyaXB0L3N0b3JlLXBhZ2VcIik7XG5jb25zdCBjcmVhdGVfZmlsdGVyXzEgPSByZXF1aXJlKFwiLi9zY3JpcHQvY3JlYXRlLWZpbHRlclwiKTtcbmZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgKDAsIHN0b3JlX3BhZ2VfMS5yZW5kZXJDYXJkcykoZGF0YS5wcm9kdWN0cyk7XG4gICAgKDAsIGNyZWF0ZV9maWx0ZXJfMS5jcmVhdGVGaWx0ZXIpKGRhdGEucHJvZHVjdHMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=