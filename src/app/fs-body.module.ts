import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BodyClassRenderer } from './services/body-class-renderer.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [],
    declarations: [],
    providers: []
})
export class FsBodyModule {

  constructor(private bodyClassRenderer: BodyClassRenderer) {
    this.bodyClassRenderer.init();
  }

  static forRoot(): ModuleWithProviders<FsBodyModule> {
    return {
      ngModule: FsBodyModule,
      providers: [BodyClassRenderer],
    };
  }
}
