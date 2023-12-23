import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainElement, RelatedElement } from '../structure/ValueStream';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IonSegmentButton } from '@ionic/angular';


@Component({
  selector: 'app-valuemapdetails',
  templateUrl: './valuemapdetails.page.html',
  styleUrls: ['./valuemapdetails.page.scss'],
})
export class ValuemapdetailsPage implements OnInit {

  item : MainElement | undefined;
  selectedSegment = 'home';
  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.item = navigation?.extras.state?.['data'];

    console.log("Accepted item", this.item);

    
  }

//   getChildElementNames(relatedElements: RelatedElement[], relationshipType: string): string[] {
//     return relatedElements
//         .filter(element => element.relationshipType === relationshipType)
//         .map(element => element.childElementName);
// }


getChildElementNames(relatedElements: RelatedElement[], relationshipType: string): string[] {
  return relatedElements
      .filter(element => element.relationshipType === relationshipType)

      .map(element => {
        const parts = element.childElementName.split('|');
        return parts.length > 0 ? parts[0].trim() : '';
      })
      .filter(element => element !== null && !element.includes("Stakeholders") && !element.includes("PRODUCTION") && (element !== '' )) ;

}
  getColor(type: string) : string {
    switch (type) {
      case 'VSS_KEY_ACTIVITY':
        return "fedexorange";  
      default:
        return "";  
}
  }
  getIcon(type: string): IconProp {
    switch (type) {
        case 'ENTRY_CRITERION':
            return ['fas', 'right-to-bracket'];
        case 'EXIT_CRITERION':
            return ['fas', 'right-from-bracket'];
        case 'VALUE_ITEM':
          return ['fas', 'scale-balanced'];
        // case 'VSS_KEY_ACTIVITY':
        //     return ['fas', 'scale-balanced'];   
        // Add more cases as needed
        default:
            return ['fas','square']; // default icon
    }
}

segmentChanged(ev: any) {
  console.log('Segment changed to', this.selectedSegment);
  console.log(ev.detail.value)
}
}
