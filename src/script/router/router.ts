import { IRouteOption, IRouter, IRouterOptions } from "../types/routers";

export class Router implements IRouter {
  private routes: IRouteOption[];

  private root: string;

  private current: string | null;

  private intervalId: ReturnType<typeof setInterval> | null;

  constructor(options: IRouterOptions) {
    this.routes = [];
    if (options.routes) {
      this.routes = options.routes;
    }
    this.root = '/';
    if (options.root) {
      this.root = options.root;
    }
    this.current = null;
    this.intervalId = null;
    this.listen();
  }

  addPath(path: RegExp, callback: () => void): void {
    this.routes.push({
      path,
      callback,
    });
  }

  setRoot(path: string): void {
    this.root = path;
  }

  addAllPath(routes: IRouteOption[]): void {
    this.routes = routes;
  }

  removePath(path: RegExp): void {
    const routeToDelete = this.routes.find((route: IRouteOption) => route.path === path);
    if (routeToDelete) {
      this.routes.splice(this.routes.indexOf(routeToDelete), 1);
    }
  }

  getPath(path: RegExp | string): string {
    const currPath = path.toString().replace(/^\//, '').replace(/\\/, '').replace(/\/$/, '');
    return currPath ? currPath : this.root;
  }

  getRoute(): string {
    let route = '';
    const match = window.location.href.match(/#(.*)$/);
    route = match && match[1] ? match[1] : this.root;
    return this.getPath(route);
  }

  navigate(path = ''): void {
    const arr = window.location.href.split('/');
    const test:string = arr[arr.length - 1].replace( /^\D+/g, '');
    window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#/${this.getPath(path)}`;
    if (test) {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#/${this.getPath(path)}/${test}`;
    }
  }

  listen(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(this.checkRoute.bind(this), 50);
  }

  checkRoute(): void {
    if (this.current === this.getRoute()) {
      return;
    }

    this.current = this.getRoute();
    this.routes.some((route) => {
      if (this.current) {
        const match = this.current.match(route.path) as unknown as [];

        if (match) {
          const currRoute = match.shift();
          this.navigate(currRoute);

          route.callback.apply({}, match);
          return this;
        }
        this.navigate(this.root);

        return false;
      } else {
        this.navigate(this.root);
      }
    });
  }
}

export default new Router({ root: ' ' });