import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/partials/home/home.component';
import { AboutComponent } from './components/partials/about/about.component';
import { WorksComponent } from './components/partials/works/works.component';
import { ProjectsComponent } from './components/partials/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';

import { ClientsCarroselComponent } from './components/partials/clients-carrosel/clients-carrosel.component';
import { RootPageComponent } from './components/pages/root-page/root-page.component';
import { WorkDetailComponent } from './components/pages/work-detail/work-detail.component';
import { TestmonialsComponent } from './components/partials/testmonials/testmonials.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LocationComponent } from './components/partials/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ProjectsComponent,
    ClientsCarroselComponent,
    RootPageComponent,
    WorkDetailComponent,
    TestmonialsComponent,
    FooterComponent,
    LocationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
