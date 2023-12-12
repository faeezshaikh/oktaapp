import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuemapdetailsPage } from './valuemapdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ValuemapdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuemapdetailsPageRoutingModule {}
