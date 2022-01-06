import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from './../../shared/shared.module'
import { HeaderComponent } from 'src/app/Components/HomeComponents/header/header.component'
import { HorizontalSliderModule } from "angular2-horizontal-slider";
// import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md'
// import { CarouselModule } from 'angular2-carousel'
import { ExperienceComponent } from './../../Components/HomeComponents/experience/experience.component'
import { WhatWeDoComponent } from 'src/app/Components/HomeComponents/what-we-do/what-we-do.component'

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ExperienceComponent, WhatWeDoComponent],
  imports: [
    HorizontalSliderModule,
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
