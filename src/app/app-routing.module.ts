import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDetailComponent } from './components/pages/work-detail/work-detail.component';
import { RootPageComponent } from './components/pages/root-page/root-page.component';

const routes: Routes = [
  {
    path: 'servicos/:tag',
    component: WorkDetailComponent,
  },
  {
    path: '',
    component: RootPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
