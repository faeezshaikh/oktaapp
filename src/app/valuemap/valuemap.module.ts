import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuemapPageRoutingModule } from './valuemap-routing.module';

import { ValuemapPage } from './valuemap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuemapPageRoutingModule
  ],
  declarations: [ValuemapPage]
})
export class ValuemapPageModule {}
