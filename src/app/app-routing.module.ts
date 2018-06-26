import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WorkExpComponent } from './work-exp/work-exp.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'workexperience', component: WorkExpComponent },
  { path: 'contact', component: AboutComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
