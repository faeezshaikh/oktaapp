import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { log } from 'console';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
  name: string | undefined;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("init card details");
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
