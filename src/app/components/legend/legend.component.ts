import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
})
export class LegendComponent implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
