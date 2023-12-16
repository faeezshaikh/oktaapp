import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../data.service';
import { MainElement } from '../ValueStream';
import { Router } from '@angular/router';

import { ModalDetailsPage } from '../modal-details/modal-details.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-valuemap',
  templateUrl: './valuemap.page.html',
  styleUrls: ['./valuemap.page.scss'],
})
export class ValuemapPage implements OnInit {

  data: MainElement[] = [];

  constructor(private dataService: MyDataService,private route: Router,private modalCtrl: ModalController) { }

  ngOnInit() {

        this.dataService.getValueMapData().subscribe(
          (results: MainElement[]) => {
            this.data = results;
            // this.filteredData= results; 
            console.log('Value Maps' + this.data);
            
          },
          (error) => {
            console.error('Error fetching data', error);
          }
        );
      
  }

  getTriggeringStakeholders(data: MainElement, relationshipType: string) {

    const filteredElements = data.relatedElements
      .filter(element => element.relationshipType === relationshipType);
    
    const processedElements = filteredElements
      .map(element => {
        const parts = element.childElementName.split('|');
        return parts.length > 0 ? parts[0].trim() : null;
      })
      .filter(element => element !== null && !element.includes("Stakeholders") && !element.includes("PRODUCTION") && (element !== '' )) ;

    return processedElements;
  }

  navigateToPage2(item: MainElement) {
    console.log('Data:', item);
    
    this.route.navigate(['/valuemapdetails'], {
      state: { data: item }
    });
  }
  
  async openModal(item:any) {
    const modal = await this.modalCtrl.create({
      component: ModalDetailsPage,
      componentProps: { value: item }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

  }

 
  

}
