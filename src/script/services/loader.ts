import { ICard } from '../types';

export class LoadData {
  async load() {
    const result = await fetch('https://dummyjson.com/products?limit=100');
    const data = await result.json();
    const arr: ICard[] = [];
    await data.products.forEach((el: ICard) => {
      arr.push(el as ICard)
    });
    return arr;
  }
}