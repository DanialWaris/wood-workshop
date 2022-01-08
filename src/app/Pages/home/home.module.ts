import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from './../../shared/shared.module'
import { HeaderComponent } from 'src/app/Components/HomeComponents/header/header.component'
import { HorizontalSliderModule } from 'angular2-horizontal-slider'
// import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md'
// import { CarouselModule } from 'angular2-carousel'
import { ExperienceComponent } from './../../Components/HomeComponents/experience/experience.component'
import { WhatWeDoComponent } from 'src/app/Components/HomeComponents/what-we-do/what-we-do.component'
import { LatestProjectsComponent } from './../../Components/HomeComponents/latest-projects/latest-projects.component'
// import { NgxGalleryModule } from 'ngx-gallery';
import { NgxGalleryModule } from '@kolkov/ngx-gallery'
import { AvailabilityComponent } from 'src/app/Components/HomeComponents/availability/availability.component'
import { LatestNewsComponent } from 'src/app/Components/HomeComponents/latest-news/latest-news.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ExperienceComponent,
    WhatWeDoComponent,
    LatestProjectsComponent,
    AvailabilityComponent,
    LatestNewsComponent,
  ],
  imports: [
    HorizontalSliderModule,
    NgxGalleryModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    NgbModule,
    HomeRoutingModule,
    // MDBBootstrapModule.forRoot(),
    // DropdownModule.forRoot(),
    // CarouselModule,
  ],
})
export class HomeModule {}
