export class ErrorPageView {
  rootNode: HTMLElement;

  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('main');
  }

  load() {
    this.rootNode.innerHTML = `<div class="container text-center h2">404 Page not found(</div>`
  }
}