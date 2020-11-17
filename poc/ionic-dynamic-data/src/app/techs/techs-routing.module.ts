import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechsPage } from './techs.page';

// import { TechsPageModule } from './techs.page.module';

const routes: Routes = [
  {
    path: '',
    component: TechsPage
  }
  ,
  // {
  //   path: '/:myId',
  //   component: TechsPageModule
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechsPageRoutingModule {}
