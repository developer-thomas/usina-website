import { Component } from '@angular/core';
import { sample_services } from 'src/app/data/services_data';

import { ServicesType } from 'src/app/models/ServicesType.interface';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss', './responsive.scss'],
})
export class WorksComponent {
  public services: ServicesType[] = sample_services;

  constructor() {}
}
