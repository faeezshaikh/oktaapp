import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../data.service';
import { MainElement } from '../ValueStream';

@Component({
  selector: 'app-valuemap',
  templateUrl: './valuemap.page.html',
  styleUrls: ['./valuemap.page.scss'],
})
export class ValuemapPage implements OnInit {

  data: MainElement[] = [];
  constructor(private dataService: MyDataService) { }

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

}
