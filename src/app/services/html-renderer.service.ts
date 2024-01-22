import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HtmlRenderer {

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
