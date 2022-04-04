import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyClassRenderer } from './services/body-service-renderer.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [

  ],
  entryComponents: [
  ],
  declarations: [

  ],
  providers: [

  ],
})
export class FsBodyModule {

  public constructor(private bodyClassRenderer: BodyClassRenderer) {
    this.bodyClassRenderer.init();
  }

  static forRoot(): ModuleWithProviders<FsBodyModule> {
    return {
      ngModule: FsBodyModule,
      providers: [BodyClassRenderer]
    };
  }
}
