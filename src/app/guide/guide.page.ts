import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ArticlePreviewComponent } from '../components/article-preview/article-preview.component';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  data: any;
  route: Router;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    fetch('./assets/data/guide.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

  async showModal(id) {
    const modal = await this.modalCtrl.create({
      component: ArticlePreviewComponent,
      componentProps: {
        data: this.data[id]
      },
      // backdropDismiss:false,
      cssClass: 'articleprev'
    })
    await modal.present();
  }
}
