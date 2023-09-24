import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './shared/components/home/home.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { RouterModule, Routes } from '@angular/router';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
