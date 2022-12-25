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
  }

  createMainElement(): void {
    this.rootNode.innerHTML = this.template();
  }

  template(): string {
    return `
    <div class="container">
        <section class="search-bar input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username"
                   aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button">Search</button>
        </section>
        <section class="row items">
            <div class="col-3 filter">
                <div class="filter-btn btn-group" role="group" aria-label="Basic example">
                    <button class="btn" type="button">Reset filters</button>
                    <button class="btn" type="button">Copy link</button>
                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                Category
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                             aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body category">
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                Brand
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body brand">
                            </div>
                        </div>
                    </div>
                </div>
                <label class="form-label fw-bold"> Price</label>
                <div class="price-range row">
                    <div class="col text-start">€<span class="min-price">0</span></div>

                    <div class="col text-end">€<span class="max-price">2000</span></div>
                </div>

                <div class="range_container price-container">
                    <div class="sliders_control price-control">
                        <input id="fromSliderPrice" type="range" value="0" min="0" max="100"/>
                        <input id="toSliderPrice" type="range" value="100" min="0" max="100"/>
                    </div>
                </div>

                <label class="form-label fw-bold">Stock</label>
                <div class="stock-range row">
                    <div class="col text-start">0</div>

                    <div class="col text-end">200</div>
                </div>

                <div class="range_container stock-container">
                    <div class="sliders_control stock-control">
                        <input id="fromSliderStock" type="range" value="0" min="0" max="100"/>
                        <input id="toSliderStock" type="range" value="100" min="0" max="100"/>
                    </div>
                </div>

            </div>
            <div class="col cards">
                <div class="row text-center cards__header">
                    <div class="col sort-menu">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                Sort options
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li class="dropdown-item price asc">Sort by price ascending</li>
                                <li class="dropdown-item price des">Sort by price descending</li>
                                <li class="dropdown-item rating asc">Sort by rating ascending</li>
                                <li class="dropdown-item rating des">Sort by rating descending</li>
                                <li class="dropdown-item discount asc">Sort by discount ascending</li>
                                <li class="dropdown-item discount des">Sort by discount descending</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">Found: <span class="items-found">100</span></div>
                    <div class="col text-end view-btns">
                        <img src="../src/icons/square.svg" alt="Square view" class="btn__view main-view active">
                        <img src="../src/icons/row.svg" alt="Row view" class="btn__view add-view">
                    </div>
                </div>
                <div class="items-cards row row-cols-1 row-cols-md-4 g-4">
                </div>
            </div>
        </section>
    </div>
    `
  }

  async loadData() {
    const result = await fetch('https://dummyjson.com/products?limit=100');
    const data = await result.json();
    data.products.forEach((el: ICard) => {
      this.selectedCards.push(el as ICard)
    });
    console.log(this.selectedCards);
    await this.createMainElement();
    await this.renderCards();
  }

  async renderCards(array?: ICard[]) {
    let data = this.selectedCards;
    if (array) {
      data = array;
    }
    const CARDS_BOX = <HTMLDivElement>document.querySelector('.items-cards');
    for (let i = 0; i < data.length; i++) {
      const finalPrice = ((data[i].price / 100) * (100 - data[i].discountPercentage)).toFixed(1);
      const card = `<div class="card h-100" data-id = '${data[i].id}' data-price = "${finalPrice}" data-rating = "${data[i].rating}" data-discount = "${data[i].discountPercentage}">
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

    this.createCheckbox(this.selectedCards, 'category', <HTMLDivElement>document.querySelector('.category'));
    this.createCheckbox(this.selectedCards, 'brand', <HTMLDivElement>document.querySelector('.brand'));
    this.controller.dualSlider('fromSliderPrice', 'toSliderPrice', 'fromSliderStock', 'toSliderStock');
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
    if (this.categoryFilter || this.brandFilter){
      const filteredData: ICard[] = this.selectedCards.map(item => item);
      document.querySelectorAll('.form-check-input').forEach(item => {
        if(this.categoryFilter?.split(' ').includes(item.id)){
          item.setAttribute('checked', 'checked');
          this.controller.model.elemEvent(this.selectedCards, filteredData);
        }
        if(this.brandFilter?.split(' ').includes(item.id)){
          item.setAttribute('checked', 'checked');
          this.controller.model.elemEvent(this.selectedCards, filteredData);
        }
      })
    }
    if (this.rangePrice[0] && this.rangePrice[1]){
      const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
      const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
      const fromRange = <HTMLInputElement>document.querySelector('#fromSliderPrice');
      const toRange = <HTMLInputElement>document.querySelector('#toSliderPrice');
      PRICE_MIN.innerText = `${this.rangePrice[0]}`;
      PRICE_MAX.innerText = `${this.rangePrice[1]}`;
      fromRange.value = this.rangePrice[0];
      toRange.value = this.rangePrice[1];
    }
    if (this.rangeStock[0] && this.rangeStock[0]){
      const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
      const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');
      const fromRange = <HTMLInputElement>document.querySelector('#fromSliderStock');
      const toRange = <HTMLInputElement>document.querySelector('#toSliderStock');
      STOCK_MIN.innerText = `${this.rangeStock[0]}`;
      STOCK_MAX.innerText = `${this.rangeStock[1]}`;
      fromRange.value = this.rangeStock[0];
      toRange.value = this.rangeStock[1];
    }
  }

  createCheckbox(data: Array<ICard>, attribute: 'category' | 'brand', path: HTMLElement) {
    const result: string[] = [];
    for (let i = 0; i < data.length; i++) {
      let current = data[i].category;
      if (attribute === 'brand') {
        current = data[i].brand;
      }
      if (!result.includes(current)) {
        result.push(String(current))
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
    const filteredData: ICard[] = defaultData.map(item => item);
    const priseArray: number[] = this.controller.model.findMinMaxValueInArray(filteredData, 'price');
    const stockArray: number[] = this.controller.model.findMinMaxValueInArray(filteredData, 'stock');
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

    this.controller.addFilterListeners(filteredData, defaultData);
  }
}


// сделать счетчик нвйденых товаров
