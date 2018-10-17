import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: 'page1.component.html'
})
export class BodyClassPage1Component implements OnInit {

  public bodyClasses;

  public ngOnInit() {
    this.bodyClasses = (<any>document).body.className;
  }
}
