import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { IgxDatePickerModule } from 'igniteui-angular';
// import { IonRangeSliderModule } from "ng2-ion-range-slider";
// import { NguiMapModule } from '@ngui/map';
// import { NgApexchartsModule } from "ng-apexcharts";
import { HorizontalSliderModule } from "angular2-horizontal-slider";
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
  ],
  imports: [
    // NgApexchartsModule,
    HorizontalSliderModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    ClickOutsideModule,
    NgbModule,
    IgxDatePickerModule,
    // NguiMapModule.forRoot({
    //   apiUrl:
    //     'https://maps.google.com/maps/api/js?key=AIzaSyAYpVP1zGb4dVxC_7gKvxr3gDbshuEDdUw',
    // }),
    // IonRangeSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
