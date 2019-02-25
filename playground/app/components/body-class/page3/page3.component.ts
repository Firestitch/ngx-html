import { Component, OnInit} from '@angular/core';
import { BodyClassRenderer } from '@firestitch/body';

@Component({
  templateUrl: 'page3.component.html'
})
export class BodyClassPage3Component implements OnInit {

  public bodyClasses;

  constructor(private bodyClassRenderer: BodyClassRenderer) {}

  public ngOnInit() {
    this.bodyClassRenderer.addBodyClass('body-class-page3');
    this.bodyClasses = (<any>document).body.className;
  }
}
