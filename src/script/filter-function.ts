import {defaultData} from '../index';
import {renderCards, CARDS_BOX} from './store-page';
import {ICard} from "../types";
import noUiSlider from 'nouislider';


export function filterData(): void {
    const CATEGORIES: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.category input');
    const BRANDS: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.brand input');
/*    const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
    const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
    const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
    const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');*/

    const SLIDER_PRICE = <HTMLDivElement>document.getElementById('slider-price');
    noUiSlider.create(SLIDER_PRICE, {
        start: [0, 2000],
        connect: true,
        range: {
            'min': 0,
            'max': 2000
        },
        step: 10,
    });

    const SLIDER_STOCK = <HTMLDivElement>document.getElementById('slider-stock');
    noUiSlider.create(SLIDER_STOCK, {
        start: [0, 200],
        connect: true,
        range: {
            'min': 0,
            'max': 200
        },
        step: 1,
    });

    // const SLIDER = <HTMLDivElement>document.querySelector('.noUi-handle .noUi-handle-lower');
    // console.log(SLIDER)

    function elemEvent(/*this: HTMLInputElement*/): void {
        // const elemId: string = this.id;
        const checkedCategories: string[] = [...document.querySelectorAll('.accordion-body.category input:checked')]
            .map(item => item.id);
        const checkedBrands: string[] = [...document.querySelectorAll('.accordion-body.brand input:checked')]
            .map(item => item.id);
        // const value = SLIDER_PRICE.noUiSlider.getPositions();

        let filteredData: ICard[];
        if (checkedBrands.length === 0 && checkedCategories.length === 0) {
            filteredData = defaultData.map(item => item);
            // filteredData = filteredData.filter(item => item.price <= );
        } else if (checkedBrands.length > 0 && checkedCategories.length > 0) {
            filteredData = defaultData.filter(item => (checkedCategories.includes(item.category) &&
                checkedBrands.includes(item.brand)));
        } else {
            filteredData = defaultData.filter(item => (checkedCategories.includes(item.category) ||
                checkedBrands.includes(item.brand)));
        }


        CARDS_BOX.innerHTML = '';
        if (filteredData.length === 0) {
            CARDS_BOX.innerHTML = `<p class="no-products">No products found</p>`;
        } else {
            renderCards(filteredData);
        }
    }

    CATEGORIES.forEach(elem => {
        elem.addEventListener('click', elemEvent);
    });

    BRANDS.forEach(elem => {
        elem.addEventListener('click', elemEvent);
    });
}
