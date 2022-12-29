import { ItemPageView } from "./ItemPageView";


export class ItemPageController {
  view: ItemPageView;

  constructor() {
    this.view = new ItemPageView();
  }

  public createPage(): void {
    const arr = window.location.href.split('/');
    if (arr[arr.length - 1] === 'item') {
      window.location.href = arr.slice(arr.length).join('/');
    }
    let id = arr[arr.length - 1];
    if (id === '00') {
      id = '100';
    }
    console.log(id);
    this.view.load(Number(id));
  }
}