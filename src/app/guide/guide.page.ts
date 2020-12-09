import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  data: any;
  route: Router;

  constructor() { }

  ngOnInit() {
    fetch('./assets/data/guide.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });
  }

  articlePrev(id) {
    console.log(this.data[id]);

  }
}
