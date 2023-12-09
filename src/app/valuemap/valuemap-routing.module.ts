import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuemapPage } from './valuemap.page';

const routes: Routes = [
  {
    path: '',
    component: ValuemapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuemapPageRoutingModule {}
