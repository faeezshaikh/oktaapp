import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuemapdetailsPageRoutingModule } from './valuemapdetails-routing.module';

import { ValuemapdetailsPage } from './valuemapdetails.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    ValuemapdetailsPageRoutingModule
  ],
  declarations: [ValuemapdetailsPage]
})
export class ValuemapdetailsPageModule {}
