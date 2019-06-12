import { NgModule } from '@angular/core';
import { QueriesComponent } from './queries.component';

import { SharedModule } from '@shared/shared.module';
import { QueriesRoutingModule } from './queries-routing.module';

@NgModule({
  imports: [SharedModule, QueriesRoutingModule],
  declarations: [QueriesComponent]
})
export class QueriesModule {}
