import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';


import { ArticlePreviewComponent } from '../components/article-preview/article-preview.component';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  latitude: number;   // Breite
  longitude: number;  // Höhe

  hp: number;
  wp: number;

  data: any;
  route: Router;

  constructor(private modalCtrl: ModalController)  {
    this.getCurrentLocation()

    setInterval(() =>
      this.getCurrentLocation()
    , 5000);
  }

  getWp() {
    return this.wp;
  }

  async getCurrentLocation() {
    let coords = {
      "leftTop" : {
        "lat": 47.769027,
        "lon": 8.994262
      },
      "rightBot" : {
        "lat": 47.763431,
        "lon": 8.999337
      }
    }

    let position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    // this.latitude = 47.767574;
    // this.longitude = 8.996252;

    let height = coords.leftTop.lat - coords.rightBot.lat;
    let width = coords.rightBot.lon - coords.leftTop.lon;

    this.hp = ((coords.leftTop.lat - this.latitude) * 100) / height;
    this.wp = ((coords.rightBot.lon - this.longitude) * 100) / width;
  }

  setObjectLocation(data) {
    let coords = {
      "leftTop" : {
        "lat": 47.769027,
        "lon": 8.994262
      },
      "rightBot" : {
        "lat": 47.763431,
        "lon": 8.999337
      }
    }

    let height = coords.leftTop.lat - coords.rightBot.lat;
    let width = coords.rightBot.lon - coords.leftTop.lon;

    let ycoord = ((coords.leftTop.lat - data.x) * 100) / height;
    let xcoord = ((coords.rightBot.lon - data.y) * 100) / width;

    return "right:" + xcoord + "%; top:" + ycoord + "%;";

  }

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
