import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Projects } from 'src/app/models/Projects.interface';
import projects_data from '../data/projects_data.json';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  public projectsData: Projects[] = projects_data;
  public projectsDataBehavior: BehaviorSubject<Projects[]> =
    new BehaviorSubject<Projects[]>(this.projectsData);

  constructor() {}

  getAllProjects(): Observable<Projects[]> {
    const projectData$: Observable<Projects[]> =
      this.projectsDataBehavior.asObservable();
    return projectData$;
  }
}
