import { Component } from '@angular/core';

import { HtmlClassRenderer } from '@firestitch/body';


@Component({
  selector: 'example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  public htmlClass = false;

  public constructor(
    private _htmlClassRenderer: HtmlClassRenderer
  ) {}
  
  public toogleHtmlClass(): void {
    if(this.htmlClass) {
      this._htmlClassRenderer.removeClass('some-class');
    } else {
      this._htmlClassRenderer.addClass('some-class');      
    }

    this.htmlClass = !this.htmlClass;
  }
}
