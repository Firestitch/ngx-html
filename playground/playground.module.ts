import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsBodyModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {  ExampleComponent,
          ExamplesComponent,
          BodyClassComponent,
          BodyClassPage1Component,
          BodyClassPage2Component,
          BodyClassPage3Component } from './app/components';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
    { path: 'body/class', component: BodyClassComponent, data: { bodyClass: 'body-class-parent' },
      children:
    [
      { path: 'page1', component: BodyClassPage1Component, data: { bodyClass: 'body-class-page1' } },
      { path: 'page2', component: BodyClassPage2Component, data: { bodyClass: 'body-class-page2' } },
      { path: 'page3', component: BodyClassPage3Component },
    ]
   },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsBodyModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    BodyClassComponent,
    BodyClassPage1Component,
    BodyClassPage2Component,
    BodyClassPage3Component
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
