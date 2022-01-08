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
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { GetInTouchComponent } from 'src/app/Components/ContactUsComponents/get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [
    ContactUsComponent,
    GetInTouchComponent,
  ],
  imports: [
    HorizontalSliderModule,
    NgxGalleryModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    NgbModule,
    ContactUsRoutingModule,
    // MDBBootstrapModule.forRoot(),
    // DropdownModule.forRoot(),
    // CarouselModule,
  ],
})
export class ContactUsModule {}
