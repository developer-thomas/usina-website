import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterByTagService } from 'src/app/services/filter-by-tag.service';
import { DetailsInterface } from 'src/app/models/Details.interface';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss', './responsive.scss'],
})
export class WorkDetailComponent {
  // Essa propriedade vai receber os dados do filtro pra ser renderizado no template de acordo com o parâmetro da rota
  public work!: DetailsInterface[];

  constructor(
    activatedRoute: ActivatedRoute,
    private filterByTag: FilterByTagService
  ) {
    activatedRoute.paramMap.subscribe((params) => {
      this.work = this.filterByTag.tagFilter(params.get('tag'));
    });
  }
}
