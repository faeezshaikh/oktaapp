import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfomapPage } from './infomap.page';

const routes: Routes = [
  {
    path: '',
    component: InfomapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfomapPageRoutingModule {}
