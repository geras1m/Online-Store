import {defaultData} from '../index';
import {renderCards, CARDS_BOX} from './store-page';
import {ICard} from "../types";
import * as noUiSlider from 'nouislider';

export function filterData(): void {
    let filteredData: ICard[];
    let priceMinValue: number;
    let priceMaxValue: number;
    let stockMinValue: number;
    let stockMaxValue: number;
    // let defaultPriceMaxValue: number = 0;
    // let defaultStockMaxValue: number = 0;
    const CATEGORIES: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.category input');
    const BRANDS: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.brand input');
    const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
    const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
    const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
    const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');

    /*
    *   min = myArray[0];
        max = min;
        for (i = 1; i < myArray.length; ++i) {
            if (myArray[i] > max) max = myArray[i];
            if (myArray[i] < min) min = myArray[i];
        }
   */

    /*for (let i = 1; i < defaultData.length; i++) {

    }*/

    const SLIDER_PRICE = document.getElementById('slider-price') as noUiSlider.target;
    noUiSlider.create(SLIDER_PRICE, {
        start: [0, 2000],
        connect: true,
        range: {
            'min': 0,
            'max': 2000
        },
        step: 10,
    });

    const SLIDER_STOCK = document.getElementById('slider-stock') as noUiSlider.target;
    noUiSlider.create(SLIDER_STOCK, {
        start: [0, 200],
        connect: true,
        range: {
            'min': 0,
            'max': 200
        },
        step: 1,
    });

    function elemEvent(): void {
        const checkedCategories: string[] = [...document.querySelectorAll('.accordion-body.category input:checked')]
            .map(item => item.id);
        const checkedBrands: string[] = [...document.querySelectorAll('.accordion-body.brand input:checked')]
            .map(item => item.id);

        if (checkedBrands.length === 0 && checkedCategories.length === 0) {
            filteredData = defaultData.map(item => item);
            filteredData = filteredData.filter(item =>
                item.price >= priceMinValue && item.price <= priceMaxValue &&
                item.stock >= stockMinValue && item.stock <= stockMaxValue);
        } else if (checkedBrands.length > 0 && checkedCategories.length > 0) {
            filteredData = defaultData.filter(item => (
                checkedCategories.includes(item.category) && checkedBrands.includes(item.brand) &&
                item.price >= priceMinValue && item.price <= priceMaxValue &&
                item.stock >= stockMinValue && item.stock <= stockMaxValue));
        } else {
            filteredData = defaultData.filter(item =>
                checkedCategories.includes(item.category) || checkedBrands.includes(item.brand));
            filteredData = filteredData.filter(item =>
                item.price >= priceMinValue && item.price <= priceMaxValue &&
                item.stock >= stockMinValue && item.stock <= stockMaxValue)
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

    SLIDER_PRICE.noUiSlider?.on('update', function (values) {
        priceMinValue = +values[0];
        priceMaxValue = +values[1];
        PRICE_MIN.innerText = `${priceMinValue}`;
        PRICE_MAX.innerText = `${priceMaxValue}`;
        elemEvent()
    });

    SLIDER_STOCK.noUiSlider?.on('update', function (values) {
        stockMinValue = +values[0];
        stockMaxValue = +values[1];
        STOCK_MIN.innerText = `${stockMinValue}`;
        STOCK_MAX.innerText = `${stockMaxValue}`;
        elemEvent()
    })
}
