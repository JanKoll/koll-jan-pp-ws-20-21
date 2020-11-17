import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.page.html',
  styleUrls: ['./techs.page.scss'],
})
export class TechsPage implements OnInit {

  myId: any;
  result: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
         this.myId = params['myId'];
    });

    fetch('./assets/data/techs.json').then(res => res.json())
    .then(json => {
      let data = json;
      this.result = data.find(data => data.title === this.myId);
    });
  }
}
