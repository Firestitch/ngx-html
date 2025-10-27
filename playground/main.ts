import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FsBodyModule } from '@firestitch/body';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { provideRouter, Routes } from '@angular/router';
import { ExamplesComponent, BodyClassComponent, BodyClassPage1Component, BodyClassPage2Component, BodyClassPage3Component } from './app/components';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { AppComponent } from './app/app.component';

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



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FsBodyModule.forRoot(), FormsModule, FsExampleModule.forRoot(), FsMessageModule.forRoot()),
        provideAnimations(),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));

