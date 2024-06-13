import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects } from 'src/models/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './responsive.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: Projects[] = [];
  public visibleProjects: Projects[] = [];

  imagensPorPagina = 6;
  paginaAtual = 0;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getImagens();
  }

  getImagens(): void {
    this.projectsService
      .getAllProjects()
      .subscribe((res) => (this.projects = res));
    this.carregarImagensVisiveis();
  }

  carregarImagensVisiveis(): void {
    const startIndex = this.paginaAtual;
    const endIndex = startIndex + this.imagensPorPagina;
    this.visibleProjects = this.projects.slice(startIndex, endIndex);
  }
  public showMore(): void {
    this.imagensPorPagina += 3;
    this.carregarImagensVisiveis();
  }
}
