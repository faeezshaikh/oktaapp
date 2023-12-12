import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuemapdetailsPageRoutingModule } from './valuemapdetails-routing.module';

import { ValuemapdetailsPage } from './valuemapdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuemapdetailsPageRoutingModule
  ],
  declarations: [ValuemapdetailsPage]
})
export class ValuemapdetailsPageModule {}
