import { ICard } from "../types";

export class MainPageModel {

  sortCards(arg: string, order: string) {
    const cardBlock = <HTMLDivElement>document.querySelector(".items-cards");
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.card');
    const active: string = '.' + arg + '.' + order;
    const data: (string | undefined)[] = [];
    const result: HTMLElement[] = [];
    if (arg === 'price') {
      cards.forEach(card => {
        data.push(card.dataset.price);
      });
    } else if (arg === 'rating') {
      cards.forEach(card => {
        data.push(card.dataset.rating);
      });
    } else {
      cards.forEach(card => {
        data.push(card.dataset.discount);
      });
    }
    const numbers: number[] = data.map(el => Number(el));
    const sortedNumbers = numbers.sort((a, b) => a - b);
    if (order === 'des') {
      sortedNumbers.reverse();
    }
    sortedNumbers.forEach(el => {
      for (let i = 0; i < data.length; i++) {
        if (String(el) === data[i]) {
          let flag = true;
          if (result.length > 0) {
            result.forEach(el => {
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
    this.addQueryParam('sort', `${arg}-${order}`);
    this.addActive(document.querySelector(active) as Element);
  }

  addQueryParam(key: string, value: string) {
    const searchParam = new URLSearchParams(window.location.search);
    searchParam.set(key, value);
    const newPath = window.location.pathname + '?' + searchParam.toString();
    history.pushState(null, '', newPath);
  }

  addActive(target: Element) {
    const parent = target.parentElement;
    if (parent != null) {
      parent.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    }
    (target as Element).classList.add('active');
  }

  findMinMaxValueInArray(arr: ICard[], path: 'price' | 'stock'): number[] {
    const result: number[] = []
    if (path === "price") {
      const arrOfNum: number[] = arr.map(item => item.price);
      result.push(Math.min.apply(null, arrOfNum));
      result.push(Math.max.apply(null, arrOfNum));
    }
    if (path === "stock") {
      const arrOfNum: number[] = arr.map(item => item.stock);
      result.push(Math.min.apply(null, arrOfNum));
      result.push(Math.max.apply(null, arrOfNum));
    }
    return result
  }

  controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#1566d7', toSlider);
    if (from + +fromSlider.max * 0.1 > to) {
      fromSlider.value = (to - +fromSlider.max * 0.1).toString();
    }
  }

  controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toSet: string) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#1566d7', toSlider);
    this.setToggleAccessible(toSlider, `${toSet}`);
    if (from + +fromSlider.max * 0.1 <= to) {
      toSlider.value = (to).toString();
    } else {
      toSlider.value = (from + +fromSlider.max * 0.1).toString();
    }
  }

  getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderColor: string, rangeColor: string, controlSlider: HTMLInputElement) {
    const rangeDistance: number = +to.max - +to.min;
    const fromPosition: number = +from.value - +to.min;
    const toPosition: number = +to.value - +to.min;
    controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
    ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
    ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%,
    ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%,
    ${sliderColor} 100%)`;
  }

  setToggleAccessible(currentTarget: HTMLInputElement, item: string) {
    const toSlider = <HTMLInputElement>document.querySelector(`#${item}`);
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = '2';
    } else {
      toSlider.style.zIndex = '0';
    }
  }

  elemEvent(filteredData: ICard[], defaultData: ICard[]): void {
    const CARDS_BOX = <HTMLDivElement>document.querySelector('.items-cards');
    const fromSliderPrice = <HTMLInputElement>document.querySelector('#fromSliderPrice');
    const toSliderPrice = <HTMLInputElement>document.querySelector('#toSliderPrice');
    const fromSliderStock = <HTMLInputElement>document.querySelector('#fromSliderStock');
    const toSliderStock = <HTMLInputElement>document.querySelector('#toSliderStock');
    const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
    const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
    const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
    const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');
    const checkedCategories: string[] = [...document.querySelectorAll('.accordion-body.category input:checked')]
      .map(item => item.id);
    const checkedBrands: string[] = [...document.querySelectorAll('.accordion-body.brand input:checked')]
      .map(item => item.id);

    if (checkedBrands.length === 0 && checkedCategories.length === 0) {
      filteredData = defaultData.map(item => item);
    } else if (checkedBrands.length > 0 && checkedCategories.length > 0) {
      filteredData = defaultData.filter(item => (
        checkedCategories.includes(item.category) && checkedBrands.includes(item.brand)));
    } else {
      filteredData = defaultData.filter(item =>
        checkedCategories.includes(item.category) || checkedBrands.includes(item.brand));
    }

    filteredData = filteredData.filter(item =>
      item.price >= +fromSliderPrice.value && item.price <= +toSliderPrice.value &&
      item.stock >= +fromSliderStock.value && item.stock <= +toSliderStock.value);

    const arrCategory: string[] = [...new Set( filteredData.map(item => item.category))];
    const arrBrand: string[] = [...new Set( filteredData.map(item => item.brand))];
    document.querySelectorAll('.form-check-label').forEach(item => {
      if(arrCategory.includes(item.innerHTML.trim()) || arrBrand.includes(item.innerHTML.trim())){
        item.classList.remove('grey-color');
      }else{
        item.classList.add('grey-color');
      }
    })

    PRICE_MIN.innerText = `${fromSliderPrice.value}`;
    PRICE_MAX.innerText = `${toSliderPrice.value}`;
    STOCK_MIN.innerText = `${fromSliderStock.value}`;
    STOCK_MAX.innerText = `${toSliderStock.value}`;

    this.addQueryParam('price_min', PRICE_MIN.innerText);
    this.addQueryParam('price_max', PRICE_MAX.innerText);
    this.addQueryParam('stock_min', STOCK_MIN.innerText);
    this.addQueryParam('stock_max', STOCK_MAX.innerText);
    this.addQueryParam('category', checkedCategories.join(' '));
    this.addQueryParam('brand', checkedBrands.join(' '));

    CARDS_BOX.innerHTML = '';
    if (filteredData.length === 0) {
      CARDS_BOX.innerHTML = `<p class="no-products">No products found</p>`;
    } else {
      const data = filteredData;
      for (let i = 0; i < data.length; i++) {
        const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
        const card = `
        <div class="card h-100" data-id = '${data[i].id}' data-price = "${finalPrice}" data-rating = "${data[i].rating}" data-discount = "${data[i].discountPercentage}">
                <img src="${data[i].thumbnail}" class="img-thumbnail" alt="Card image">
                <div class="card-body">
                  <h5 class="card-title">${data[i].title}</h5>
                  <p class="text-muted card-text">
                  <small class="stock">In stock: ${data[i].stock}</small>
                  <p>
                    <small class="text-muted category">${data[i].category},</small>
                    <small class="text-muted brand">${data[i].brand},</small>
                    <small class="text-muted rating">${data[i].rating}★</small>
                  </p>
                  <p>
                    <small class="text-muted description hidden">${data[i].description}</small>
                  </p>
                  <p class="text-end">
                    <span class="price">€${data[i].price}</span>
                    <small class="text-muted sale">-${data[i].discountPercentage}%</small>
                    €<span class="final-price h4">${finalPrice}</span>
                    <button type="button" class="btn add">+Add to cart</button>
                  </p>
                  </p>
                </div>
              </div>`;
        CARDS_BOX.insertAdjacentHTML('beforeend', card);
      }
    }

    if (new URLSearchParams(window.location.search).get('sort')){
      const sortSrt = new URLSearchParams(window.location.search).get('sort') as string;
      const array = sortSrt.toString().split("-");
      this.sortCards(array[0], array[1]);
    }
  }
}
