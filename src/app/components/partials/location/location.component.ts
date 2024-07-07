import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss', './responsive.scss'],
})
export class LocationComponent implements AfterViewInit {
  place: L.LatLngExpression = [2.8215059567428566, -60.683844032180815];
  mapPopup: string =
    'Av. Gen. Ataíde Teive, 586 - Mecejana, <br> Boa Vista - RR, 69304-360';
  private map!: any;

  ngAfterViewInit(): void {
    this.map = L.map('map').setView(this.place, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 13,
    }).addTo(this.map);

    L.marker([2.8215059567428566, -60.683844032180815])
      .addTo(this.map)
      .bindPopup(this.mapPopup)
      .openPopup();
  }
}
