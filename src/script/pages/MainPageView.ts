import { LoadData } from "../services/loader";
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
  search: string | null;
  categoryFilter: string | null;
  brandFilter: string | null;
  rangePrice: string[];
  rangeStock: string[];
  filteredData: ICard[];
  render: Render;
  data: LoadData;

  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('main');
    this.selectedCards = [];
    this.controller = new MainPageController();
    this.URL = new URLSearchParams(window.location.search);
    this.addressSort = this.URL.get('sort');
    this.addressView = this.URL.get('view');
    this.search = this.URL.get('search');
    this.categoryFilter = this.URL.get('category');
    this.brandFilter = this.URL.get('brand');
    this.rangePrice = [this.URL.get('price_min'), this.URL.get('price_max')] as string[];
    this.rangeStock = [this.URL.get('stock_min'), this.URL.get('stock_max')] as string[];
    this.filteredData = this.selectedCards.map(item => item);
    this.render = new Render;
    this.data = new LoadData;
  }

  createMainElement(): void {
    this.rootNode.innerHTML = this.render.templateMain();
  }


  async load() {
    const arr = await this.data.load();
    this.selectedCards = arr;
    this.filteredData = arr;
    this.createMainElement();
    this.render.items(this.selectedCards);
    this.render.Checkbox(this.selectedCards, 'category', <HTMLElement>document.querySelector('.category'));
    this.render.Checkbox(this.selectedCards, 'brand', <HTMLElement>document.querySelector('.brand'));
    this.controller.resetFilters(this.selectedCards, this.filteredData);
    this.controller.addCopyLinkBtn();
    this.viewChange();
    this.controller.sort(this.selectedCards);
    this.filterData(this.selectedCards);
    this.controller.inputSearch(this.selectedCards, this.filteredData);
    this.render.header(this.selectedCards);
    if (this.addressSort) {
      const array = this.addressSort.toString().split("-");
      this.controller.model.sortCards(array[0], array[1]);
    }
    if (this.addressView) {
      this.controller.changeView(this.addressView);
    }
    if (this.search){
      const INPUT_SEARCH = <HTMLInputElement>document.querySelector('.form-control');
      INPUT_SEARCH.value = this.search;
      this.controller.model.elemEvent(this.selectedCards, this.selectedCards);
    }
    if (this.categoryFilter || this.brandFilter) {
      const filteredData: ICard[] = this.selectedCards.map(item => item);
      document.querySelectorAll('.form-check-input').forEach(item => {
        if (this.categoryFilter?.split(' ').includes(item.id)) {
          item.setAttribute('checked', 'checked');
          this.controller.model.elemEvent(this.selectedCards, filteredData);
        }
        if (this.brandFilter?.split('-').includes(item.id)) {
          item.setAttribute('checked', 'checked');
          this.controller.model.elemEvent(this.selectedCards, filteredData);
        }
      })
    }
    if (this.rangePrice[0]) {
      const result: string = this.rangePrice[0].slice(0, -2);
      const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
      const FROM_RANGE = <HTMLInputElement>document.querySelector('#fromSliderPrice');
      PRICE_MIN.innerText = `${result}`;
      FROM_RANGE.value = PRICE_MIN.innerText;
      this.controller.model.elemEvent(this.selectedCards, this.filteredData);
    }
    if ( this.rangePrice[1]) {
      const result: string = this.rangePrice[1].slice(0, -2);
      const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
      const TO_RANGE = <HTMLInputElement>document.querySelector('#toSliderPrice');
      PRICE_MAX.innerText = `${result}`;
      TO_RANGE.value = PRICE_MAX.innerText;
      this.controller.model.elemEvent(this.selectedCards, this.filteredData);
    }
    if (this.rangeStock[0]) {
      const result: string = this.rangeStock[0].slice(0, -2);
      const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
      const FROM_RANGE = <HTMLInputElement>document.querySelector('#fromSliderStock');
      STOCK_MIN.innerText = `${result}`;
      FROM_RANGE.value = result;
      this.controller.model.elemEvent(this.selectedCards, this.filteredData);
    }
    if (this.rangeStock[1]) {
      const result: string = this.rangeStock[1].slice(0, -2);
      const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');
      const TO_RANGE = <HTMLInputElement>document.querySelector('#toSliderStock');
      STOCK_MAX.innerText = `${result}`;
      TO_RANGE.value = result;
      this.controller.model.elemEvent(this.selectedCards, this.filteredData);
    }
    this.controller.dualSlider('fromSliderPrice', 'toSliderPrice', 'fromSliderStock', 'toSliderStock');
    this.controller.addItemBtnsListeners(this.selectedCards);
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
