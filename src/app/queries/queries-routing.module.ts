import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { QueriesComponent } from './queries.component';

const route: Route[] = [{ path: '', component: QueriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class QueriesRoutingModule {}
