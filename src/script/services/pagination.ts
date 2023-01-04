import {ICard} from '../types';
import {LoadData} from "./loader";
import {Render} from "./render";

export class Pagination {
    data: LoadData;
    render: Render;

    constructor() {
        this.data = new LoadData;
        this.render = new Render;
    }

    // async getData() {
    //     const arr = await this.data.load();
    //     const keys: (string | null)[] = [];
    //     for (let i = 0; i < localStorage.length; i++) {
    //         keys.push(localStorage.key(i));
    //     }
    //     this.item = arr.filter(e => keys.includes(String(e.id)));
    // }

    pagination(data: ICard[]): void {

        const keys: (string | null)[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        const item = data.filter(e => keys.includes(String(e.id)))/*.map((el, index) => {
            el.order = index + 1;
        });*/

        // в этом itme добавить еще одно поле с порядковым номером для каждого
        console.log(data, 'item')
        const currentPage = 0;
        const numberOfCards = <HTMLInputElement>document.querySelector('#typeNumber');

        const displayList = (arrData: ICard[], numOfCards: number, page: number): void => {
            const itemsPath = <HTMLElement>document.querySelector('.cart-items');
            const start = numOfCards * page;
            const end = start + numOfCards;
            const paginatedData = arrData.slice(start, end);
            console.log(paginatedData, start, end)

            this.render.items(paginatedData, itemsPath, 'cart')
            // console.log(paginatedData)
        };

        const displayPagination = (arrData: ICard[], numOfCards: number  ): void => {
            const paginationNumbers = <HTMLElement>document.querySelector('.pagination');
            const pageCount = Math.ceil(arrData.length / numOfCards);

            for (let i = 0; i < pageCount; i++) {
                const btn = displayPaginationBtns(i + 1);
                paginationNumbers.insertAdjacentHTML('beforeend', btn);
            }

        }

        const displayPaginationBtns = (num: number): string => {
            // рассписать создание этой li через createElement чтобы навесить на это все события (27 мин)
            const elem = `<li class="page-item"><a class="page-link" href="#">${num}</a></li>`;
            return elem;
        }
        displayList(item, +numberOfCards.value, currentPage);
        displayPagination(item, +numberOfCards.value);
        console.log('yyyy')
    }
}
