/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultData = void 0;
const store_page_1 = __webpack_require__(/*! ./script/store-page */ "./src/script/store-page.ts");
const create_filter_1 = __webpack_require__(/*! ./script/create-filter */ "./src/script/create-filter.ts");
const filter_function_1 = __webpack_require__(/*! ./script/filter-function */ "./src/script/filter-function.ts");
fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(data => {
    exports.defaultData = data.products;
    (0, store_page_1.renderCards)(data.products);
    (0, create_filter_1.createFilter)(data.products);
    (0, filter_function_1.filterData)();
});


/***/ }),

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

/***/ "./src/script/filter-function.ts":
/*!***************************************!*\
  !*** ./src/script/filter-function.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filterData = void 0;
const index_1 = __webpack_require__(/*! ../index */ "./src/index.ts");
let filteredData;
function filterData() {
    const categories = document.querySelectorAll('.form-check-input');
    function elemEvent() {
        const elemId = this.id.split('-').slice(1).join('-');
        console.log(elemId);
        filteredData = index_1.defaultData.filter(item => {
            /*if(item.brand === ){

            }*/
        });
    }
    categories.forEach(elem => {
        elem.addEventListener('click', elemEvent);
    });
}
exports.filterData = filterData;


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQixxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQsd0JBQXdCLG1CQUFPLENBQUMsNkRBQXdCO0FBQ3hELDBCQUEwQixtQkFBTyxDQUFDLGlFQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2JZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSw4RUFBOEUsZ0JBQWdCO0FBQzlGLHNEQUFzRCxnQkFBZ0I7QUFDdEUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGLGlEQUFpRCxhQUFhO0FBQzlELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQ25DUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsZ0JBQWdCLG1CQUFPLENBQUMsZ0NBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7O0FDcEJMO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBLDJEQUEyRCxXQUFXO0FBQ3RFLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBLDJEQUEyRCxpQkFBaUI7QUFDNUUsd0RBQXdELGNBQWM7QUFDdEUseURBQXlELGVBQWU7QUFDeEU7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNELHdEQUF3RCwyQkFBMkI7QUFDbkYsc0RBQXNELFdBQVc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7O1VDMUJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHQvY3JlYXRlLWZpbHRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0L2ZpbHRlci1mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0L3N0b3JlLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHREYXRhID0gdm9pZCAwO1xyXG5jb25zdCBzdG9yZV9wYWdlXzEgPSByZXF1aXJlKFwiLi9zY3JpcHQvc3RvcmUtcGFnZVwiKTtcclxuY29uc3QgY3JlYXRlX2ZpbHRlcl8xID0gcmVxdWlyZShcIi4vc2NyaXB0L2NyZWF0ZS1maWx0ZXJcIik7XHJcbmNvbnN0IGZpbHRlcl9mdW5jdGlvbl8xID0gcmVxdWlyZShcIi4vc2NyaXB0L2ZpbHRlci1mdW5jdGlvblwiKTtcclxuZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cz9saW1pdD0xMDAnKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBleHBvcnRzLmRlZmF1bHREYXRhID0gZGF0YS5wcm9kdWN0cztcclxuICAgICgwLCBzdG9yZV9wYWdlXzEucmVuZGVyQ2FyZHMpKGRhdGEucHJvZHVjdHMpO1xyXG4gICAgKDAsIGNyZWF0ZV9maWx0ZXJfMS5jcmVhdGVGaWx0ZXIpKGRhdGEucHJvZHVjdHMpO1xyXG4gICAgKDAsIGZpbHRlcl9mdW5jdGlvbl8xLmZpbHRlckRhdGEpKCk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNyZWF0ZUZpbHRlciA9IHZvaWQgMDtcclxuZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGRhdGEpIHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5Jyk7XHJcbiAgICBjb25zdCBicmFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icmFuZCcpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW107XHJcbiAgICBjb25zdCBicmFuZExpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghY2F0ZWdvcnlMaXN0LmluY2x1ZGVzKGRhdGFbaV0uY2F0ZWdvcnkpKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5TGlzdC5wdXNoKFN0cmluZyhkYXRhW2ldLmNhdGVnb3J5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYnJhbmRMaXN0LmluY2x1ZGVzKGRhdGFbaV0uYnJhbmQpKSB7XHJcbiAgICAgICAgICAgIGJyYW5kTGlzdC5wdXNoKFN0cmluZyhkYXRhW2ldLmJyYW5kKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yeUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveENhdGVnb3J5ID0gYDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiY2F0ZWdvcnktJHtjYXRlZ29yeUxpc3RbaV19XCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJjYXRlZ29yeS0ke2NhdGVnb3J5TGlzdFtpXX1cIj5cclxuICAgICAgJHtjYXRlZ29yeUxpc3RbaV19XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgICAgIGNhdGVnb3J5LmlubmVySFRNTCArPSBjaGVja2JveENhdGVnb3J5O1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicmFuZExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjaGVja2JveEJyYW5kID0gYDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIiBpZD1cImJyYW5kLSR7YnJhbmRMaXN0W2ldfVwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImJyYW5kLSR7YnJhbmRMaXN0W2ldfVwiPlxyXG4gICAgICAke2JyYW5kTGlzdFtpXX1cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+YDtcclxuICAgICAgICBicmFuZC5pbm5lckhUTUwgKz0gY2hlY2tib3hCcmFuZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNyZWF0ZUZpbHRlciA9IGNyZWF0ZUZpbHRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5maWx0ZXJEYXRhID0gdm9pZCAwO1xyXG5jb25zdCBpbmRleF8xID0gcmVxdWlyZShcIi4uL2luZGV4XCIpO1xyXG5sZXQgZmlsdGVyZWREYXRhO1xyXG5mdW5jdGlvbiBmaWx0ZXJEYXRhKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNoZWNrLWlucHV0Jyk7XHJcbiAgICBmdW5jdGlvbiBlbGVtRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbUlkID0gdGhpcy5pZC5zcGxpdCgnLScpLnNsaWNlKDEpLmpvaW4oJy0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtSWQpO1xyXG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGluZGV4XzEuZGVmYXVsdERhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAvKmlmKGl0ZW0uYnJhbmQgPT09ICl7XHJcblxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWxlbUV2ZW50KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZmlsdGVyRGF0YSA9IGZpbHRlckRhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmVuZGVyQ2FyZHMgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIHJlbmRlckNhcmRzKGRhdGEpIHtcclxuICAgIGNvbnN0IENBUkRTX0JPWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1jYXJkcycpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmluYWxQcmljZSA9ICgoZGF0YVtpXS5wcmljZSAvIDEwMCkgKiAoMTAwIC0gZGF0YVtpXS5kaXNjb3VudFBlcmNlbnRhZ2UpKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBgPGRpdiBjbGFzcz1cImNhcmQgaC0xMDBcIiBkYXRhLWlkID0gJyR7ZGF0YVtpXS5pZH0nPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YVtpXS50aHVtYm5haWx9XCIgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgYWx0PVwiQ2FyZCBpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZGF0YVtpXS50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIGNhdGVnb3J5XCI+JHtkYXRhW2ldLmNhdGVnb3J5fTwvc21hbGw+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBicmFuZFwiPiR7ZGF0YVtpXS5icmFuZH08L3NtYWxsPixcclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgcmF0aW5nXCI+JHtkYXRhW2ldLnJhdGluZ308L3NtYWxsPuKYhVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPuKCrCR7ZGF0YVtpXS5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIHNhbGVcIj4tJHtkYXRhW2ldLmRpc2NvdW50UGVyY2VudGFnZX0lPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmluYWwtcHJpY2UgaDNcIj7igqwke2ZpbmFsUHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIENBUkRTX0JPWC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNhcmQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucmVuZGVyQ2FyZHMgPSByZW5kZXJDYXJkcztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9