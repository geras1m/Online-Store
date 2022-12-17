import {defaultData} from '../index';
import {renderCards, CARDS_BOX} from './store-page';
import {ICard} from "../types";

export function filterData(): void {
    /*    const inputPriceRange = <HTMLInputElement>document.querySelector('#price-range');
        const inputStockRange = <HTMLInputElement>document.querySelector('#stock-range');*/
    const categories: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.category input');
    const brands: NodeListOf<HTMLInputElement> = document.querySelectorAll('.accordion-body.brand input');

    function elemEvent(this: HTMLInputElement): void {
        const elemId: string = this.id;
        const checkedCategories: string[] = [...document.querySelectorAll('.accordion-body.category input:checked')].map(item => item.id);
        const checkedBrands: string[] = [...document.querySelectorAll('.accordion-body.brand input:checked')].map(item => item.id);
        let filteredData: ICard[];
        if(checkedBrands.length === 0 && checkedCategories.length === 0){
            filteredData = defaultData.map(item => item);
        }
        else if (checkedBrands.length > 0 && checkedCategories.length > 0){
            filteredData = defaultData.filter(item => (
                (checkedCategories.includes(item.category) && checkedBrands.includes(item.brand))
            ));
        }else {
            filteredData = defaultData.filter(item => (
                (checkedCategories.includes(item.category) || checkedBrands.includes(item.brand))
            ));
        }

        CARDS_BOX.innerHTML = '';
        renderCards(filteredData);
    }

    categories.forEach(elem => {
        elem.addEventListener('click', elemEvent);
    });

    brands.forEach(elem => {
        elem.addEventListener('click', elemEvent);
    });
}

/*
function filterGoods() {
    const
        country = filters.querySelector('#country').value,
        sizes = [...filters.querySelectorAll('#size input:checked')].map(n => n.value),
        priceMin = document.querySelector('#price-min').value,
        priceMax = document.querySelector('#price-max').value;

    outputGoods(DATA.filter(n => (
        (!country || n.country === country) &&
        (!sizes.length || sizes.includes(n.size)) &&
        (!priceMin || priceMin <= n.cost) &&
        (!priceMax || priceMax >= n.cost)
    )));
}
*/



