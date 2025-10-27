import { Component, OnInit} from '@angular/core';
import { BodyClassRenderer } from '@firestitch/body';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    templateUrl: 'page3.component.html',
    standalone: true,
    imports: [MatButton, RouterLink]
})
export class BodyClassPage3Component implements OnInit {

  public bodyClasses;

  constructor(private bodyClassRenderer: BodyClassRenderer) {}

  public ngOnInit() {
    this.bodyClassRenderer.addBodyClass('body-class-page3');
    this.bodyClasses = (<any>document).body.className;
  }
}
