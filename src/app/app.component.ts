import { Component, NgModuleFactory, Compiler } from '@angular/core';
import { DynamicLoadingModule } from './dynamic-loading/dynamic-loading.module';
import { DynamicLoadingComponent } from './dynamic-loading/dynamic-loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lazyModuleFactory: NgModuleFactory<DynamicLoadingModule>;
  lazyComponent: DynamicLoadingComponent;

  constructor(private compiler: Compiler) {}

  loadComponent() {
    import('./dynamic-loading/dynamic-loading.module').then(module => {
      const lazyPageModule = module.DynamicLoadingModule;
      this.compiler.compileModuleAsync(lazyPageModule).then(moduleFactory => {
        this.lazyModuleFactory = moduleFactory;
        this.lazyComponent = lazyPageModule.DynamicLoadingComponent;
      });
    });
  }
}
