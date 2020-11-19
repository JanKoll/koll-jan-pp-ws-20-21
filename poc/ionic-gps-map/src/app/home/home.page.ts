import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude: number;   // Breite
  longitude: number;  // Höhe

  hp: number;
  wp: number;

  constructor() {

    this.getLocation()

    setInterval(() =>
      this.getLocation()
    , 5000);

  }

  getWp() {
    return this.wp;
  }


  // Oben Links   lon: 7,2264   Breite
  //              lat: 51,5178  Höhe
  // Unten Rechts lon: 7,2268   Breite
  //              lat: 51,5174  Höhe

  async getLocation() {
    let coords = {
      "leftTop" : {
        "x": 7.2265,
        "y": 51.5177
      },
      "rightBot" : {
        "x": 7.2267,
        "y": 51.5175
      }
    }

    let position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    let width = coords.rightBot.x - coords.leftTop.x;
    let height = coords.leftTop.y - coords.rightBot.y;

    this.wp = (width - (coords.rightBot.x - position.coords.longitude)) / width * 100;
    this.hp = (height - (coords.leftTop.y - position.coords.latitude)) / height * 100;
  }


}
