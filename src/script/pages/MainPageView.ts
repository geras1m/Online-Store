import { Render } from "../services/render";
import { ICard } from "../types";
import { MainPageController } from "./MainPageController";

export class MainPageView {
  private rootNode: HTMLElement;
  private selectedCards: ICard[];
  controller: MainPageController;
  addressSort: string | null;
  URL: URLSearchParams;
  addressView: string | null;
  categoryFilter: string | null;
  brandFilter: string | null;
  rangePrice: string[];
  rangeStock: string[];
  filteredData: ICard[];
  render: Render;

  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('main');
    this.selectedCards = [];
    this.controller = new MainPageController();
    this.controller.sort();
    this.URL = new URLSearchParams(window.location.search);
    this.addressSort = this.URL.get('sort');
    this.addressView = this.URL.get('view');
    this.categoryFilter = this.URL.get('category');
    this.brandFilter = this.URL.get('brand');
    this.rangePrice = [this.URL.get('price_min'), this.URL.get('price_max')] as string[];
    this.rangeStock = [this.URL.get('stock_min'), this.URL.get('stock_max')] as string[];
    this.filteredData = this.selectedCards.map(item => item);
    this.render = new Render;
  }

  async createMainElement() {
    this.rootNode.innerHTML = this.render.templateMain();
    const result = await fetch('https://dummyjson.com/products?limit=100');
    const arr = await result.json();
    arr.products.forEach((el: ICard) => {
      this.selectedCards.push(el as ICard)
    });
  }

  async loadData() {
    this.createMainElement();
    await this.render.items(this.selectedCards);
    // this.controller.dualSlider('fromSliderPrice', 'toSliderPrice', 'fromSliderStock', 'toSliderStock');
    console.dir(document.querySelectorAll('.form-check-input'))
    this.controller.resetFilters(this.selectedCards, this.filteredData);
    this.viewChange();
    this.controller.sort();
    this.filterData(this.selectedCards);
    if (this.addressSort) {
      const array = this.addressSort.toString().split("-");
      this.controller.model.sortCards(array[0], array[1]);
    }
    if (this.addressView) {
      this.controller.changeView(this.addressView);
    }
    if (this.categoryFilter || this.brandFilter) {
      const filteredData: ICard[] = this.selectedCards.map(item => item);
      document.querySelectorAll('.form-check-input').forEach(item => {
        if (this.categoryFilter?.split(' ').includes(item.id)) {
          item.setAttribute('checked', 'checked');
          this.controller.model.elemEvent(this.selectedCards, filteredData);
        }
        if (this.brandFilter?.split(' ').includes(item.id)) {
          item.setAttribute('checked', 'checked');
          this.controller.model.elemEvent(this.selectedCards, filteredData);
        }
      })
    }
    if (this.rangePrice[0] && this.rangePrice[1]) {
      const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
      const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
      const FROM_RANGE = <HTMLInputElement>document.querySelector('#fromSliderPrice');
      const TO_RANGE = <HTMLInputElement>document.querySelector('#toSliderPrice');
      PRICE_MIN.innerText = `${this.rangePrice[0]}`;
      PRICE_MAX.innerText = `${this.rangePrice[1]}`;
      FROM_RANGE.value = PRICE_MIN.innerText;
      TO_RANGE.value = PRICE_MAX.innerText;
      this.controller.model.elemEvent(this.selectedCards, this.filteredData);
    }
    if (this.rangeStock[0] && this.rangeStock[0]) {
      const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
      const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');
      const FROM_RANGE = <HTMLInputElement>document.querySelector('#fromSliderStock');
      const TO_RANGE = <HTMLInputElement>document.querySelector('#toSliderStock');
      STOCK_MIN.innerText = `${this.rangeStock[0]}`;
      STOCK_MAX.innerText = `${this.rangeStock[1]}`;
      FROM_RANGE.value = this.rangeStock[0];
      TO_RANGE.value = this.rangeStock[1];
      this.controller.model.elemEvent(this.selectedCards, this.filteredData);
    }
    this.controller.dualSlider('fromSliderPrice', 'toSliderPrice', 'fromSliderStock', 'toSliderStock');
  }

  viewChange(): void {
    const changeViewB = document.querySelectorAll('.btn__view');
    changeViewB.forEach(element => {
      element.addEventListener('click', (event) => {
        let param = 'add-view';
        if ((event.target as Element).classList.contains('main-view')) {
          param = 'main-view';
        }
        this.controller.changeView(param);
      })
    });
  }

  filterData(defaultData: ICard[]): void {
    const fromSliderPrice = <HTMLInputElement>document.querySelector('#fromSliderPrice');
    const toSliderPrice = <HTMLInputElement>document.querySelector('#toSliderPrice');
    const fromSliderStock = <HTMLInputElement>document.querySelector('#fromSliderStock');
    const toSliderStock = <HTMLInputElement>document.querySelector('#toSliderStock');
    const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
    const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
    const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
    const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');
    const priseArray: number[] = this.controller.model.findMinMaxValueInArray(this.filteredData, 'price');
    const stockArray: number[] = this.controller.model.findMinMaxValueInArray(this.filteredData, 'stock');
    PRICE_MIN.innerText = `${priseArray[0]}`;
    PRICE_MAX.innerText = `${priseArray[1]}`;
    STOCK_MIN.innerText = `${stockArray[0]}`;
    STOCK_MAX.innerText = `${stockArray[1]}`;
    fromSliderPrice.min = priseArray[0].toString();
    fromSliderPrice.max = priseArray[1].toString();
    fromSliderPrice.value = priseArray[0].toString();
    toSliderPrice.min = priseArray[0].toString();
    toSliderPrice.max = priseArray[1].toString();
    toSliderPrice.value = priseArray[1].toString();

    fromSliderStock.min = stockArray[0].toString();
    fromSliderStock.max = stockArray[1].toString();
    fromSliderStock.value = stockArray[0].toString();
    toSliderStock.min = stockArray[0].toString();
    toSliderStock.max = stockArray[1].toString();
    toSliderStock.value = stockArray[1].toString();
    this.controller.addFilterListeners(this.filteredData, defaultData);
  }
}

