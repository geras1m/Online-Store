import { ErrorPageController } from "../404/ErrorPageController";
import { ItemPageView } from "./ItemPageView";


export class ItemPageController {
  view: ItemPageView;
  errPage: ErrorPageController;

  constructor() {
    this.view = new ItemPageView();
    this.errPage = new ErrorPageController();
  }

  public createPage(): void {
    const arr = window.location.href.split('/');
    if (arr[arr.length - 1] === 'item') {
      window.location.href = arr.slice(arr.length).join('/');
    }
    const id = arr[arr.length - 1];
    if (Number(id) > 100 || Number(id) < 1 || !/^\d+$/.test(id)) {
      this.errPage.createPage();
    } else {
      this.view.load(Number(id));
    }
  }
}