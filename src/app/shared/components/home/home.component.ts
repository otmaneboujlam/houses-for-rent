import { Component, inject } from '@angular/core';
import { HousingLocation } from 'src/app/models/housing-location';
import { HousingService } from 'src/app/providers/housing.service';

@Component({
  selector: 'hfr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
