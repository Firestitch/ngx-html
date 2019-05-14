import { Injectable, RendererFactory2 } from '@angular/core';
import { ActivationEnd, ActivationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Injectable()
export class BodyClassRenderer {
  private bodyClassListener;
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
        filter( event => event instanceof ActivationStart ||
                event instanceof ActivationEnd)
      )
      .subscribe((event) => {

        if (event instanceof ActivationStart) {

          const parentRouteBodyClasses = this.getParentRouteBodyClasses(event.snapshot);

          document.body.className.split(' ')
          .forEach((name) => {
            if (name.match(/^body-/) &&
                parentRouteBodyClasses.indexOf(name) < 0) {
              this.removeBodyClass(name);
            }
          });

        } else if (event instanceof ActivationEnd) {
          const data = event.snapshot.routeConfig.data;
          if (data && data.bodyClass) {

            this.parseBodyClasses(data.bodyClass).forEach(cls => {
              this.addBodyClass(cls);
            });
          }
        }

      });
  }

  private parseBodyClasses(data) {
    return data.split(/[\s,]/).filter(Boolean)
    .map((cls) => {
      return cls.indexOf('body-') === 0 ? cls : 'body-' + cls;
    });
  }

  private getParentRouteBodyClasses(route) {
    const classes = [];

    if (route.data && route.data.bodyClass) {
      const bodyClasses = this.parseBodyClasses(route.data.bodyClass);
      classes.push(...bodyClasses);
    }

    if (route.parent && route.parent) {
      classes.push(...this.getParentRouteBodyClasses(route.parent));
    }

    return classes;
  }
}
