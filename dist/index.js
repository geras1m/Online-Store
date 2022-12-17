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
const categoryPath = document.querySelector('.category');
const brandPath = document.querySelector('.brand');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBLG1FQUFtRSxVQUFVO0FBQzdFLDJDQUEyQyxVQUFVO0FBQ3JELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOzs7Ozs7Ozs7OztBQ3hCVDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSwyREFBMkQsV0FBVztBQUN0RSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQSwyREFBMkQsaUJBQWlCO0FBQzVFLHdEQUF3RCxjQUFjO0FBQ3RFLHlEQUF5RCxlQUFlO0FBQ3hFO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Qsd0RBQXdELDJCQUEyQjtBQUNuRixzREFBc0QsV0FBVztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7VUM3Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCLG1CQUFPLENBQUMsdURBQXFCO0FBQ2xELHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHQvY3JlYXRlLWZpbHRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0L3N0b3JlLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlQ2hlY2tib3ggPSB2b2lkIDA7XG5mdW5jdGlvbiBjcmVhdGVDaGVja2JveChkYXRhLCBhdHRyaWJ1dGUsIHBhdGgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkYXRhW2ldLmNhdGVnb3J5O1xuICAgICAgICBpZiAoYXR0cmlidXRlID09PSAnYnJhbmQnKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gZGF0YVtpXS5icmFuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goU3RyaW5nKGN1cnJlbnQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIGlkPVwiJHtyZXN1bHRbaV19XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cIiR7cmVzdWx0W2ldfVwiPlxuICAgICAgJHtyZXN1bHRbaV19XG4gICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5gO1xuICAgICAgICBwYXRoLmlubmVySFRNTCArPSBjaGVja2JveDtcbiAgICB9XG59XG5leHBvcnRzLmNyZWF0ZUNoZWNrYm94ID0gY3JlYXRlQ2hlY2tib3g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVuZGVyQ2FyZHMgPSB2b2lkIDA7XG5mdW5jdGlvbiByZW5kZXJDYXJkcyhkYXRhKSB7XG4gICAgY29uc3QgQ0FSRFNfQk9YID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWNhcmRzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsUHJpY2UgPSAoKGRhdGFbaV0ucHJpY2UgLyAxMDApICogKDEwMCAtIGRhdGFbaV0uZGlzY291bnRQZXJjZW50YWdlKSkudG9GaXhlZCgxKTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMFwiIGRhdGEtaWQgPSAnJHtkYXRhW2ldLmlkfSc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YVtpXS50aHVtYm5haWx9XCIgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgYWx0PVwiQ2FyZCBpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtkYXRhW2ldLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBjYXRlZ29yeVwiPiR7ZGF0YVtpXS5jYXRlZ29yeX0sPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIGJyYW5kXCI+JHtkYXRhW2ldLmJyYW5kfSw8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgcmF0aW5nXCI+JHtkYXRhW2ldLnJhdGluZ33imIU8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+IEluIHN0b2NrOlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0b2NrXCI+JHtkYXRhW2ldLnN0b2NrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7igqwke2RhdGFbaV0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWQgc2FsZVwiPi0ke2RhdGFbaV0uZGlzY291bnRQZXJjZW50YWdlfSU8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmluYWwtcHJpY2UgaDNcIj7igqwke2ZpbmFsUHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICBDQVJEU19CT1guaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjYXJkKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbmRlckNhcmRzID0gcmVuZGVyQ2FyZHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzdG9yZV9wYWdlXzEgPSByZXF1aXJlKFwiLi9zY3JpcHQvc3RvcmUtcGFnZVwiKTtcbmNvbnN0IGNyZWF0ZV9maWx0ZXJfMSA9IHJlcXVpcmUoXCIuL3NjcmlwdC9jcmVhdGUtZmlsdGVyXCIpO1xuY29uc3QgY2F0ZWdvcnlQYXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5Jyk7XG5jb25zdCBicmFuZFBhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJhbmQnKTtcbmZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgKDAsIHN0b3JlX3BhZ2VfMS5yZW5kZXJDYXJkcykoZGF0YS5wcm9kdWN0cyk7XG4gICAgKDAsIGNyZWF0ZV9maWx0ZXJfMS5jcmVhdGVDaGVja2JveCkoZGF0YS5wcm9kdWN0cywgJ2NhdGVnb3J5JywgY2F0ZWdvcnlQYXRoKTtcbiAgICAoMCwgY3JlYXRlX2ZpbHRlcl8xLmNyZWF0ZUNoZWNrYm94KShkYXRhLnByb2R1Y3RzLCAnYnJhbmQnLCBicmFuZFBhdGgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=