import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: 'page2.component.html'
})
export class BodyClassPage2Component implements OnInit {

  public bodyClasses;

  public ngOnInit() {
    this.bodyClasses = (<any>document).body.className;
  }
}
