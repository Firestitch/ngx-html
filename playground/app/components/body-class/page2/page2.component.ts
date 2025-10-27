import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
    templateUrl: 'page2.component.html',
    standalone: true,
    imports: [MatButton, RouterLink]
})
export class BodyClassPage2Component implements OnInit {

  public bodyClasses;

  public ngOnInit() {
    this.bodyClasses = (<any>document).body.className;
  }
}
