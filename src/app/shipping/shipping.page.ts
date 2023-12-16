import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDataService } from '../data.service';
import { CardDetailsPage } from '../card-details/card-details.page';
import { ModalController, NavController } from '@ionic/angular';
import { LeveldetailPage } from '../leveldetail/leveldetail.page';
import { Capability, Level1sChild } from '../structure/Capability';
import { FilterPage } from '../filter/filter.page';
import { FilteredCapability } from '../structure/FilteredCapability';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {

  public shipping!: string;
  private activatedRoute = inject(ActivatedRoute);

  data: Capability[] = [];
  filteredData: FilteredCapability[] = [];
  searchTerm: string = '';
  constructor(private dataService: MyDataService,private modalCtrl: ModalController,private route: Router) {}

  ngOnInit() {
    // this.shipping = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.shipping = this.activatedRoute.snapshot.component?.name as string;
    this.dataService.getData().subscribe(
      (results: Capability[]) => {
        this.data = results;
        this.filteredData = results.map(cap => ({
          capability: cap,
          matchingChildren: cap.children
        })); 
        console.log('Caps' + this.data);
        
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  
  }

  filterData() {
    this.filteredData = []; // Clear existing filtered data

    if (!this.searchTerm) {
      // If no search term, populate with all capabilities and their children
      this.filteredData = this.data.map(cap => ({
        capability: cap,
        matchingChildren: cap.children
      }));
      return;
    }
  
    // Filter logic
    this.data.forEach(cap => {
      const matchingChildren = cap.children.filter(child => 
        child.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  
      if (cap.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || matchingChildren.length > 0) {
        this.filteredData.push({
          capability: cap,
          matchingChildren: matchingChildren
        });
      }
    });
  }

  navigateToPage(item: Capability ) {
    this.route.navigate(['/leveldetail'], {
      state: { data: item }
    });
  }

  navigateToPage2(item: Level1sChild,parentName: string) {
    this.route.navigate(['/leveldetail'], {
      state: { data: item, parentName: parentName }
    });
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      componentProps: { value: this.data}
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
    }
  }

}
