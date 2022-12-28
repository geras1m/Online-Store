import { Cart } from "../services/cart";
import { Header } from "../services/header";
import { ICard } from "../types";
import { MainPageModel } from "./MainPageModel";

export class MainPageController {
    model: MainPageModel;
    header: Header;
    cart: Cart;

    constructor() {
        this.model = new MainPageModel();
        this.header = new Header();
        this.cart = new Cart();
    }

    sort(defaultData: ICard[]) {
        const sortBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.dropdown-item');
        sortBtns.forEach(element => {
            element.addEventListener('click', (event) => {
                let order = 'asc';
                let param = 'discount';
                if ((event.target as Element).classList.contains('des')) {
                    order = 'des';
                }
                if ((event.target as Element).classList.contains('price')) {
                    param = 'price';
                } else if ((event.target as Element).classList.contains('rating')) {
                    param = 'rating';
                }
                this.model.sortCards(param, order);
                this.addItemBtnsListeners(defaultData)
            })
        });
    }

    dualSlider(fromPrice: string, toPrice: string, fromStock: string, toStock: string) {
        const fromSliderPrice = <HTMLInputElement>document.querySelector('#fromSliderPrice');
        const toSliderPrice = <HTMLInputElement>document.querySelector('#toSliderPrice');
        const fromSliderStock = <HTMLInputElement>document.querySelector('#fromSliderStock');
        const toSliderStock = <HTMLInputElement>document.querySelector('#toSliderStock');
        this.model.fillSlider(fromSliderPrice, toSliderPrice, '#C6C6C6', '#1566d7', toSliderPrice);
        this.model.setToggleAccessible(toSliderPrice, `${toPrice}`);

        fromSliderPrice.oninput = () => this.model.controlFromSlider(fromSliderPrice, toSliderPrice);
        toSliderPrice.oninput = () => this.model.controlToSlider(fromSliderPrice, toSliderPrice, `${toPrice}`);

        this.model.fillSlider(fromSliderStock, toSliderStock, '#C6C6C6', '#1566d7', toSliderStock);

        fromSliderStock.oninput = () => this.model.controlFromSlider(fromSliderStock, toSliderStock);
        toSliderStock.oninput = () => this.model.controlToSlider(fromSliderStock, toSliderStock, `${toStock}`);
    }

    resetFilters(defaultData: ICard[], filteredData: ICard[]) {
        const RESET_BTN = <HTMLButtonElement>document.querySelector('#resetFilters');
        RESET_BTN.addEventListener('click', () => {
            this.model.resetFilterBtn(defaultData, filteredData)
            this.addItemBtnsListeners(defaultData)
        });
    }

    changeView(view: string) {
        const description = document.querySelectorAll('.description');
        const items = document.querySelector('.items-cards');
        if (view === 'add-view') {
            description.forEach(el => {
                el.classList.remove('hidden')
            });
            if (items) {
                items.classList.remove('row-cols-md-4');
                items.classList.add('row-cols-md-1');
            }
        } else {
            description.forEach(el => {
                el.classList.add('hidden')
            });
            if (items) {
                items.classList.remove('row-cols-md-1');
                items.classList.add('row-cols-md-4');
            }
        }
        this.model.addQueryParam('view', view);
        this.model.addActive(document.querySelector(`.${view}`) as Element);
    }

    addFilterListeners(filteredData: ICard[], defaultData: ICard[]) {
        const fromSliderPrice = <HTMLInputElement>document.querySelector('#fromSliderPrice');
        const toSliderPrice = <HTMLInputElement>document.querySelector('#toSliderPrice');
        const fromSliderStock = <HTMLInputElement>document.querySelector('#fromSliderStock');
        const toSliderStock = <HTMLInputElement>document.querySelector('#toSliderStock');
        const CATEGORIES: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.category input');
        const BRANDS: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.brand input');

        CATEGORIES.forEach(elem => {
            elem.addEventListener('click', () => {
                this.model.elemEvent(filteredData, defaultData)
                this.addItemBtnsListeners(defaultData)
            });
        });

        BRANDS.forEach(elem => {
            elem.addEventListener('click', () => {
                this.model.elemEvent(filteredData, defaultData)
                this.addItemBtnsListeners(defaultData)
            });
        });

        fromSliderPrice.addEventListener('input', () => {
            this.model.elemEvent(filteredData, defaultData)
            this.addItemBtnsListeners(defaultData)
        });
        toSliderPrice.addEventListener('input', () => {
            this.model.elemEvent(filteredData, defaultData)
            this.addItemBtnsListeners(defaultData)
        });

        fromSliderStock.addEventListener('input', () => {
            this.model.elemEvent(filteredData, defaultData)
            this.addItemBtnsListeners(defaultData)
        });
        toSliderStock.addEventListener('input', () => {
            this.model.elemEvent(filteredData, defaultData)
            this.addItemBtnsListeners(defaultData)
        });
    }

    addItemBtnsListeners(defaultData: ICard[]) {
        const addBtns = document.querySelectorAll('.add');
        const removeBtns = document.querySelectorAll('.remove');
        if (addBtns) {
            addBtns.forEach(el => {
                el.addEventListener('click', () => {
                    this.cart.addToCart(el);
                    this.header.update(defaultData, 'add', el)
                });
            });
        }

        if (removeBtns) {
            removeBtns.forEach(el => {
                el.addEventListener('click', () => {
                    this.cart.removeFromCart(el);
                    this.header.update(defaultData, 'remove', el)
                });
            });
        }
    }
}
