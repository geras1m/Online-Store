import { ErrorPageView } from "./ErrorPageView";

export class ErrorPageController {
  view: ErrorPageView;

  constructor() {
    this.view = new ErrorPageView();
  }

  public createPage(): void {
    this.view.load();
  }
}