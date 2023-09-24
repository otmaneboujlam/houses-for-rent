import { Component, Input } from '@angular/core';
import { HousingLocation } from 'src/app/models/housing-location';

@Component({
  selector: 'hfr-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;
}
