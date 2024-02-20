import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FsBodyModule } from '@firestitch/body';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { AppComponent } from './app.component';
import {
  BodyClassComponent,
  BodyClassPage1Component,
  BodyClassPage2Component,
  BodyClassPage3Component,
  ExampleComponent,
  ExamplesComponent
} from './components';
import { AppMaterialModule } from './material.module';


const routes: Routes = [
  { path: '', component: ExamplesComponent, data: { bodyClass: 'body-home' } },
  {
    path: 'body/class', component: BodyClassComponent, data: { bodyClass: 'body-class-parent' },
    children:
      [
        {
          path: 'page1',
          component: BodyClassPage1Component,
          data: { bodyClass: 'body-class-page1 without-prefix' }
        },
        {
          path: 'page2',
          component: BodyClassPage2Component,
          data: { bodyClass: 'body-class-page2' }
        },
        { path: 'page3', component: BodyClassPage3Component },
      ]
  },
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsBodyModule.forRoot(),
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        FsExampleModule.forRoot(),
        FsMessageModule.forRoot(),
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
    providers: []
})
export class PlaygroundModule {
}
