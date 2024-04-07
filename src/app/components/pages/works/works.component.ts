import { Component } from '@angular/core';
import { sample_services } from '../../../../services_data';
import { ServicesType } from 'src/models/ServicesType';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss', './responsive.scss'],
})
export class WorksComponent {
  public services: ServicesType[] = sample_services;

  constructor() {}
}
