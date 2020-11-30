import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  articleId: any;
  result: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
         this.articleId = params['articleId'];
    });

    fetch('./assets/data/guide.json').then(res => res.json())
    .then(json => {
      let data = json;
      this.result = data.find(data => data.name === this.articleId);
    });
  }

}
