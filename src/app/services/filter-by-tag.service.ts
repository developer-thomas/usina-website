import { Injectable } from '@angular/core';
import { DetailsInterface } from '../models/Details.interface';
import { Router } from '@angular/router';

import { Details } from '../data/details_data';

@Injectable({
  providedIn: 'root',
})
export class FilterByTagService {
  private data: DetailsInterface[] = Details;

  constructor(private router: Router) {}

  tagFilter(tag: string | null): DetailsInterface[] {
    return this.data.filter(
      (item) => tag?.toLowerCase() === item.tag.toLowerCase()
    );
  }
}
