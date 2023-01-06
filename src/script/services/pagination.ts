import {ICard} from '../types';
import {Render} from "./render";

type EventSubscriber = (data: ICard[]) => void;

export class Pagination {
    render: Render;

    constructor() {
        this.render = new Render;
    }

    pagination(data: ICard[], callback?: EventSubscriber ): void {
        const keys: (string | null)[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        const item = [...data].filter(e => keys.includes(String(e.id)));
        item.forEach((el, index) => {
            el.order = index + 1;
        })
        /*console.log(data, 'd');
        console.log(item, 'i');*/

        let currentPage = 1;
        const numberOfCards = <HTMLInputElement>document.querySelector('#typeNumber');

        numberOfCards.addEventListener('input', (e) => {
            console.log((e.target as HTMLInputElement).value);
            const newNumberOfCards: number = +(e.target as HTMLInputElement).value;
            const curPage = <HTMLLIElement>document.querySelector('.page-item.active');
            console.log(curPage)

            if(newNumberOfCards >= item.length || !newNumberOfCards) {
                displayList(item, item.length, 1);
                displayPagination(item, item.length);
                /*const firstPage = document.querySelector('.page-link') as HTMLElement | null;
                if (firstPage) {
                    firstPage.click();
                }*/
            } else {
                displayList(item, newNumberOfCards, currentPage);
                displayPagination(item, newNumberOfCards);
            }

        })

        const displayList = (arrData: ICard[], numOfCards: number, page: number): void => {
            const itemsPath = <HTMLElement>document.querySelector('.cart-items');
            itemsPath.innerHTML = '';
            page--;
            const start = numOfCards * page;
            const end = start + numOfCards;
            const paginatedData = arrData.slice(start, end);
            console.log(paginatedData, start, end);

            this.render.items(paginatedData, itemsPath, 'cart');
            if (callback){
                callback(item)
            }
        };

        const displayPagination = (arrData: ICard[], numOfCards: number  ): void => {
            const paginationNumbers = <HTMLElement>document.querySelector('.pagination');
            const pageCount = Math.ceil(arrData.length / numOfCards);
            paginationNumbers.innerText = '';

            // условие на удаление кнопок
            for (let i = 0; i < pageCount; i++) {
                const btn = displayPaginationBtns(i + 1);
                paginationNumbers.appendChild(btn);
            }
        }

        const displayPaginationBtns = (num: number): HTMLLIElement => {
            const btnLi = document.createElement('li');
            btnLi.classList.add("page-item");
            const link = document.createElement('a');
            link.classList.add('page-link');
            link.innerText = `${num}`;
            btnLi.appendChild(link);

            if (currentPage === num){
                btnLi.classList.add('active');
            }

            btnLi.addEventListener('click', () => {
                currentPage = num;
                displayList(item, +numberOfCards.value, currentPage);

                const currentBtn = <HTMLLIElement>document.querySelector('.page-item.active');
                currentBtn.classList.remove('active');
                btnLi.classList.add('active');
            })
            return btnLi;
        }
        displayList(item, +numberOfCards.value, currentPage);
        displayPagination(item, +numberOfCards.value);
    }
}
