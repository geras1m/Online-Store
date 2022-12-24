import {defaultData} from '../index';
import {renderCards, CARDS_BOX} from './store-page';
import {ICard} from "../types";

const fromSliderPrice = <HTMLInputElement>document.querySelector('#fromSliderPrice');
const toSliderPrice = <HTMLInputElement>document.querySelector('#toSliderPrice');
const fromSliderStock = <HTMLInputElement>document.querySelector('#fromSliderStock');
const toSliderStock = <HTMLInputElement>document.querySelector('#toSliderStock');

function dualSlider(fromPrice: string, toPrice: string, fromStock: string, toStock: string) {

    function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement) {
        const [from, to] = getParsed(fromSlider, toSlider);
        fillSlider(fromSlider, toSlider, '#C6C6C6', '#1566d7', toSlider);
        if (from > to) {
            fromSlider.value = to.toString();
        }
    }

    function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toSet: string) {
        const [from, to] = getParsed(fromSlider, toSlider);
        fillSlider(fromSlider, toSlider, '#C6C6C6', '#1566d7', toSlider);
        setToggleAccessible(toSlider, `${toSet}`);
        if (from <= to) {
            toSlider.value = to.toString();
        } else {
            toSlider.value = from.toString();
        }
    }

    function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
        const from = parseInt(currentFrom.value, 10);
        const to = parseInt(currentTo.value, 10);
        return [from, to];
    }

    function fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderColor: string, rangeColor: string, controlSlider: HTMLInputElement) {
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

    function setToggleAccessible(currentTarget: HTMLInputElement, item: string) {
        const toSlider = <HTMLInputElement>document.querySelector(`#${item}`);
        if (Number(currentTarget.value) <= 0) {
            toSlider.style.zIndex = '2';
        } else {
            toSlider.style.zIndex = '0';
        }
    }

    // const fromSliderPrice = <HTMLInputElement>document.querySelector(`#${fromPrice}`);
    // const toSliderPrice = <HTMLInputElement>document.querySelector(`#${toPrice}`);
    fillSlider(fromSliderPrice, toSliderPrice, '#C6C6C6', '#1566d7', toSliderPrice);
    setToggleAccessible(toSliderPrice, `${toPrice}`);

    fromSliderPrice.oninput = () => controlFromSlider(fromSliderPrice, toSliderPrice);
    toSliderPrice.oninput = () => controlToSlider(fromSliderPrice, toSliderPrice, `${toPrice}`);

    // const fromSliderStock = <HTMLInputElement>document.querySelector(`#${fromStock}`);
    // const toSliderStock = <HTMLInputElement>document.querySelector(`#${toStock}`);
    fillSlider(fromSliderStock, toSliderStock, '#C6C6C6', '#1566d7', toSliderStock);

    fromSliderStock.oninput = () => controlFromSlider(fromSliderStock, toSliderStock);
    toSliderStock.oninput = () => controlToSlider(fromSliderStock, toSliderStock, `${toStock}`);
}

dualSlider('fromSliderPrice', 'toSliderPrice', 'fromSliderStock', 'toSliderStock');

function findMinMaxValueInArray(arr: ICard[], path: 'price' | 'stock'): number[] {
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

export function filterData(): void {
    let filteredData: ICard[];
    // let priceMinValue: number;
    // let priceMaxValue: number;
    // let stockMinValue: number;
    // let stockMaxValue: number;
    // let defaultPriceMaxValue: number = 0;
    // let defaultStockMaxValue: number = 0;
    const CATEGORIES: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.category input');
    const BRANDS: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.brand input');
    const PRICE_MIN = <HTMLSpanElement>document.querySelector('.price-range>.text-start>.min-price');
    const PRICE_MAX = <HTMLSpanElement>document.querySelector('.price-range>.text-end>.max-price');
    const STOCK_MIN = <HTMLDivElement>document.querySelector('.stock-range>.text-start');
    const STOCK_MAX = <HTMLDivElement>document.querySelector('.stock-range>.text-end');

    filteredData = defaultData.map(item => item)
    const priseArray: number[] = findMinMaxValueInArray(filteredData, 'price');
    const stockArray: number[] = findMinMaxValueInArray(filteredData, 'stock');
    PRICE_MIN.innerText = `${priseArray[0]}`;
    PRICE_MAX.innerText = `${priseArray[1]}`;
    STOCK_MIN.innerText = `${stockArray[0]}`;
    STOCK_MAX.innerText = `${stockArray[1]}`;

    // тут будут IF-ы в зависимости отусловия разные данные

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

    // console.log(priseArray, stockArray)

    function elemEvent(): void {
        const checkedCategories: string[] = [...document.querySelectorAll('.accordion-body.category input:checked')]
            .map(item => item.id);
        const checkedBrands: string[] = [...document.querySelectorAll('.accordion-body.brand input:checked')]
            .map(item => item.id);


        if (checkedBrands.length === 0 && checkedCategories.length === 0) {
            filteredData = defaultData.map(item => item);

            filteredData = filteredData.filter(item =>
                item.price >= +fromSliderPrice.value && item.price <= +toSliderPrice.value &&
                item.stock >= +fromSliderStock.value && item.stock <= +toSliderStock.value);
            // console.log(fromSliderPrice.value, toSliderPrice.value)
        } else if (checkedBrands.length > 0 && checkedCategories.length > 0) {
            filteredData = defaultData.filter(item => (
                checkedCategories.includes(item.category) && checkedBrands.includes(item.brand) &&
                item.price >= +fromSliderPrice.value && item.price <= +toSliderPrice.value &&
                item.stock >= +fromSliderStock.value && item.stock <= +toSliderStock.value));
            // console.log(fromSliderPrice.value, toSliderPrice.value)
        } else {
            filteredData = defaultData.filter(item =>
                checkedCategories.includes(item.category) || checkedBrands.includes(item.brand));
            // console.log(priceMinValue, priceMaxValue)
            filteredData = filteredData.filter(item =>
                item.price >= +fromSliderPrice.value && item.price <= +toSliderPrice.value &&
                item.stock >= +fromSliderStock.value && item.stock <= +toSliderStock.value)
            // console.log(fromSliderPrice.value, toSliderPrice.value)
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

    fromSliderPrice.addEventListener('input', elemEvent);
    toSliderPrice.addEventListener('input', elemEvent);

    fromSliderStock.addEventListener('input', elemEvent);
    toSliderStock.addEventListener('input', elemEvent);
}
