import { Injectable } from '@angular/core';
import { sample_services } from '../data/services_data';
import { ServicesType } from 'src/models/ServicesType';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FilterByTagService {
  private data: ServicesType[] = sample_services;

  constructor(private router: Router) {}

  tagFilter(tag: string | null): ServicesType[] {
    return this.data.filter((item) => tag === item.tag);

    //   return this.data.filter((item) => {
    //     if (tag === item.tag) {
    //       return item;
    //     } else {
    //       return;
    //     }
    //   });
    // }
  }
}
