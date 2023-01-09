import {ICard} from '../types';
import {Render} from "./render";

type EventSubscriber = (data: ICard[]) => void;

export class Pagination {
    render: Render;

    constructor() {
        this.render = new Render;
    }

    removeQueryParams() {
        const close = document.querySelector('.btn-close');
        const background = document.getElementById('buy-now-modal');
        const arr = window.location.href.split('/');
        arr[4] = '#';
        close?.addEventListener('click', () => {
            history.pushState(null, '', arr.join('/'));
        });

        background?.addEventListener('click', function(event) {
            if (event.currentTarget !== event.target) {
                return;
            }
            history.pushState(null, '', arr.join('/'));
        }, false)
    }

    addQueryParam(key: string, value: string) {
        const searchParam = new URLSearchParams(window.location.search);
        searchParam.set(key, value);
        const newPath = window.location.pathname + '?' + searchParam.toString();
        history.pushState(null, '', newPath);
    }

    pagination(data: ICard[], callback?: EventSubscriber): void {
        const keys: (string | null)[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        const item = [...data].filter(e => keys.includes(String(e.id)));
        item.forEach((el, index) => {
            el.order = index + 1;
        })
        let currentPage = 1;
        const numberOfCards = <HTMLInputElement>document.querySelector('#typeNumber');

        numberOfCards.addEventListener('input', (e) => {
            const newNumberOfCards: number = +(e.target as HTMLInputElement).value;
            if (newNumberOfCards >= 0) {
                if (newNumberOfCards >= item.length || !newNumberOfCards) {
                    displayList(item, item.length, 1);
                    displayPagination(item, item.length);
                } else {
                    displayList(item, newNumberOfCards, 1);
                    displayPagination(item, newNumberOfCards);
                }
                const currentBtn: NodeListOf<HTMLLIElement> = document.querySelectorAll('.page-item');
                for (let i = 0; i < currentBtn.length; i++) {
                    currentBtn[i].classList.remove('active');
                }
                currentBtn[0].classList.add('active');
            }
        })

        const displayList = (arrData: ICard[], numOfCards: number, page: number): void => {
            const itemsPath = <HTMLElement>document.querySelector('.cart-items');
            itemsPath.innerHTML = '';
            page--;
            const start = numOfCards * page;
            const end = start + numOfCards;
            const paginatedData = arrData.slice(start, end);

            this.render.items(paginatedData, itemsPath);
            if (callback) {
                callback(item)
            }
            const visibleOrder: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card.h-100');
            for (let i = 0; i < visibleOrder.length; i++) {
                const order = `<div class="item-number">${paginatedData[i].order}</div>`;
                visibleOrder[i].insertAdjacentHTML('afterbegin', order)
            }
        };

        const displayPagination = (arrData: ICard[], numOfCards: number): void => {
            const paginationNumbers = <HTMLElement>document.querySelector('.pagination');
            const pageCount = Math.ceil(arrData.length / numOfCards);
            paginationNumbers.innerText = '';
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

            if (currentPage === num) {
                btnLi.classList.add('active');
                // const searchParam = new URLSearchParams(window.location.search);
                // console.log(window.location.pathname)
                // this.addQueryParam('curPage', currentPage.toString());
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
