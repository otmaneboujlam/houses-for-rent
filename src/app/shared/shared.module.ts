import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from '../shared/components/housing-location/housing-location.component';
import { DetailsComponent } from '../shared/details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SharedModule { }
