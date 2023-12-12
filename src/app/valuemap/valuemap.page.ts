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

  // getTriggeringStakeholders(data: MainElement) {
  //   return data.relatedElements
  //   .filter(element => element.relationshipType === 'STAKEHOLDER_TRIGGERS_VALUE_STREAM')
  //   .map(element => {
  //     // Split the string by the pipe and take the part after the pipe
  //     const parts = element.childElementName.split('|');
  //     return parts.length > 0  ? parts[0].trim() : null;
  //   })
  //   .filter(element => element !== null && element !== ''); // Filter out blank or null values

  // }

  getTriggeringStakeholders(data: MainElement) {
    console.log('Original Data:', data.relatedElements); // Debug: Log original data
  
    const filteredElements = data.relatedElements
      .filter(element => element.relationshipType === 'STAKEHOLDER_TRIGGERS_VALUE_STREAM');
  
    console.log('Filtered by Relationship Type:', filteredElements); // Debug: Log after filtering by relationship type
  
    const processedElements = filteredElements
      .map(element => {
        const parts = element.childElementName.split('|');
        return parts.length > 0 ? parts[0].trim() : null;
      })
      .filter(element => element !== null && (element !== '' || element.includes("Stakeholders"))) ;
  
    console.log('Processed Elements:', processedElements); // Debug: Log final processed elements
  
    return processedElements;
  }
  
  getValueProp(data: MainElement) {
    return data.relatedElements
      .filter(element => element.relationshipType === 'VALUE_STREAM_DELIVERS_PROPOSITION')
      .map(element => element.childElementName);
      
  }

}
