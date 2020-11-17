import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  data: any;
  route: Router;

  constructor() { }

  // "implements OnInit" wird in der export classe bemnötigt um daten zu bekommen
  ngOnInit() {
    fetch('./assets/data/techs.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

  // const nav = document.querySelector('ion-nav');

  // viewDetail(title) {
  //   // const tech = this.data.find(tech => tech.title === title);
  //
  //
  //   // this.navCtrl.push('DetailPage', {title: title});
  //   console.log(title);
  //
  //   this.route.navigate(['/techs/:' + title]);
  //
  //   // nav.push('nav-detail', { tech });
  //
  //
  //   // Call detail Page
  //
  // }



}
