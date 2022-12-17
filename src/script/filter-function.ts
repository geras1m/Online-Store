import {ICard} from '../types';
import {defaultData} from '../index';
let filteredData: ICard[];

export function filterData(): void {
    const categories: NodeListOf<HTMLInputElement> = document.querySelectorAll('.form-check-input');

    function elemEvent(this: HTMLInputElement): void {
        const elemId: string = this.id.split('-').slice(1).join('-');
        console.log(elemId)
        filteredData = defaultData.filter(item => {
            /*if(item.brand === ){

            }*/
        })
    }

    categories.forEach(elem => {
        elem.addEventListener('click', elemEvent);
    });
}



