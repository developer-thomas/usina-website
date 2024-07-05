import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDetailComponent } from './components/pages/work-detail/work-detail.component';
import { RootPageComponent } from './components/pages/root-page/root-page.component';

const routes: Routes = [
  {
    path: ':tag',
    component: WorkDetailComponent,
  },
  {
    path: '',
    component: RootPageComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
    }),
  ],
})
export class AppRoutingModule {}
