import { Injectable, RendererFactory2 } from '@angular/core';
import { ActivationEnd, ActivationStart, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';


@Injectable()
export class BodyClassRenderer {
  public bodyClassListener;
  private componentBodyClasses = [];
  private _renderer;

  constructor(private _router: Router,
              rendererFactory: RendererFactory2) {
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  get renderer() {
    return this._renderer;
  }

  set renderer(val) {
    this._renderer = val;
  }

  public destroy() {
    if (this.bodyClassListener) {
      this.bodyClassListener.unsubscribe();
    }
  }

  public addBodyClass(cls) {
    this._renderer.addClass(document.body, cls);
  }

  public removeBodyClass(cls) {
    this.renderer.removeClass(document.body, cls);
  }

  public init() {

    this.bodyClassListener = this._router
      .events
      .pipe(
        filter(event => event instanceof ActivationStart || event instanceof ActivationEnd || event instanceof NavigationStart)
      )
      .subscribe((event) => {

        if (event instanceof ActivationStart) {

          let componentBodyClasses = [];
          this.componentBodyClasses.forEach(item => {
            if (this.hasRouteComponent(item.name, event.snapshot)) {
              componentBodyClasses.push(item.cls);
            }
          });

          const parentRouteBodyClasses = this.getParentRouteBodyClasses(event.snapshot);

          document.body.className.split(' ').forEach((name) => {
            if (name.match(/^body-/) && componentBodyClasses.indexOf(name)<0 && parentRouteBodyClasses.indexOf(name)<0) {
              this.removeBodyClass(name);
            }
          });
        } else if (event instanceof NavigationStart) {

        } else if (event instanceof ActivationEnd) {
          const data = event.snapshot.routeConfig.data;
          if (data && data.bodyClass) {

            data.bodyClass.split(/[\s,]/).forEach((cls) => {
              this.addBodyClass(cls);
            });
          }
        }

      });
  }

  private getParentRouteBodyClasses(route) {
    const classes = [];

    if (route.data && route.data.bodyClass) {
      classes.push(...route.data.bodyClass.split(/[\s,]/));
    }

    if (route.parent && route.parent) {
      classes.push(...this.getParentRouteBodyClasses(route.parent));
    }

    return classes;
  }

  private hasRouteComponent(name, snapshot) {
    if (snapshot.component && snapshot.component.name === name) {
      return true;
    }

    if (snapshot.parent) {
      return this.hasRouteComponent(name, snapshot.parent);
    }

    return false;
  }

  private registerComponentBodyClass(component, cls) {
    this.addBodyClass(cls);
    this.componentBodyClasses.push({ name: component.constructor.name, cls: cls });
  }
}
