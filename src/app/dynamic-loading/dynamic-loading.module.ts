import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicLoadingComponent } from './dynamic-loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicLoadingComponent],
  entryComponents: [DynamicLoadingComponent]
})
export class DynamicLoadingModule {
  static DynamicLoadingComponent = DynamicLoadingComponent;
}
