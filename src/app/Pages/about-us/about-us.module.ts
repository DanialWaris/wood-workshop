import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from '../../shared/shared.module'
import { HorizontalSliderModule } from 'angular2-horizontal-slider'
// import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md'
// import { CarouselModule } from 'angular2-carousel'
// import { NgxGalleryModule } from 'ngx-gallery';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { WhoWeAreComponent } from 'src/app/Components/AboutUsComponents/who-we-are/who-we-are.component';
import { QualitiesComponent } from 'src/app/Components/AboutUsComponents/qualities/qualities.component';
import { TeamComponent } from 'src/app/Components/AboutUsComponents/team/team.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    WhoWeAreComponent,
    QualitiesComponent,
    TeamComponent,
  ],
  imports: [
    HorizontalSliderModule,
    NgxGalleryModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    NgbModule,
    AboutUsRoutingModule,
    // MDBBootstrapModule.forRoot(),
    // DropdownModule.forRoot(),
    // CarouselModule,
  ],
})
export class AboutUsModule {}
