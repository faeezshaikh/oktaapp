import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valuemapdetails',
  templateUrl: './valuemapdetails.page.html',
  styleUrls: ['./valuemapdetails.page.scss'],
})
export class ValuemapdetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const item = navigation?.extras.state?.['data'];

    console.log("Accepted item", item);

    
  }
}
