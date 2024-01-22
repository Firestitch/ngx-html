import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';


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

  public get renderer() {
    return this._renderer;
  }

  public set renderer(val) {
    this._renderer = val;
  }

  public addClass(cls) {
    this._renderer.addClass(document.documentElement, cls);
  }

  public removeClass(cls) {
    this.renderer.removeClass(document.documentElement, cls);
  }

  public addStyle(styles, options?: { id?: string }): void {
    const id = options?.id ? ` id="${options?.id}"` : '';

    if(options?.id) {
      const el = document.querySelector(`#${options?.id}`);
      if(el) {
        el.innerHTML = styles;

        return;
      }
    }

    document.head.insertAdjacentHTML('beforeend', `<style${id}>${styles}</style>`);
  }

}
