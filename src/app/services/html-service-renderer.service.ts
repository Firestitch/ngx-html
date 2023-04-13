import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HtmlClassRenderer {

  private _renderer: Renderer2;

  constructor(
    private _rendererFactory: RendererFactory2,
  ) {
    this._renderer = _rendererFactory.createRenderer(null, null);
  }

  get renderer() {
    return this._renderer;
  }

  set renderer(val) {
    this._renderer = val;
  }

  public addClass(cls) {
    this._renderer.addClass(document.documentElement, cls);
  }

  public removeClass(cls) {
    this.renderer.removeClass(document.documentElement, cls);
  }

}
