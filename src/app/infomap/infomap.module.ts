import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfomapPageRoutingModule } from './infomap-routing.module';

import { InfomapPage } from './infomap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfomapPageRoutingModule
  ],
  declarations: [InfomapPage]
})
export class InfomapPageModule {}
