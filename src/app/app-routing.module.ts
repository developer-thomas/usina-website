import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDetailComponent } from './components/pages/work-detail/work-detail.component';
import { RootPageComponent } from './components/pages/root-page/root-page.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
  },
  {
    path: 'services/:tag',
    component: WorkDetailComponent,
    pathMatch: 'full',
  },

  {
    path: 'services/**',
    component: NotfoundComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
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
