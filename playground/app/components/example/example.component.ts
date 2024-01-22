import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HtmlClassRenderer, HtmlRenderer } from '@firestitch/body';


@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {

  public htmlClass = false;

  constructor(
    private _htmlClassRenderer: HtmlClassRenderer,
    private _htmlRenderer: HtmlRenderer,
  ) {
    this._htmlRenderer.addStyle('body { background: #0027ff33; }', { id: 'styles' });
  }

  public toogleHtmlClass(): void {
    if(this.htmlClass) {
      this._htmlClassRenderer.removeClass('some-class');
    } else {
      this._htmlClassRenderer.addClass('some-class');
    }

    this.htmlClass = !this.htmlClass;
  }
}
