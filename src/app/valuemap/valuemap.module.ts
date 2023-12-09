import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuemapPageRoutingModule } from './valuemap-routing.module';

import { ValuemapPage } from './valuemap.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    ValuemapPageRoutingModule
  ],
  declarations: [ValuemapPage]
})
export class ValuemapPageModule {}
