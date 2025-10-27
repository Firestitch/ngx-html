import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, inject } from '@angular/core';

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
  private bodyClassRenderer = inject(BodyClassRenderer);


  constructor() {
    this.bodyClassRenderer.init();
  }

  static forRoot(): ModuleWithProviders<FsBodyModule> {
    return {
      ngModule: FsBodyModule,
      providers: [BodyClassRenderer],
    };
  }
}
