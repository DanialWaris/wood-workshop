import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { FullLayoutComponent } from './components/layout/full-layout/full-layout.component'
import { AuthInterceptor } from './services/authInterceptor/authIntercept'

import 'hammerjs'
import 'mousetrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// services
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component'
import { AboutHeaderComponent } from './components/about-header/about-header.component'
import { ClientSayingsComponent } from './components/client-sayings/client-sayings.component'
import { HorizontalSliderModule } from 'angular2-horizontal-slider'

// Directives

@NgModule({
  declarations: [
    FullLayoutComponent,
    NavbarComponent,
    FooterComponent,
    AboutHeaderComponent,
    ClientSayingsComponent,
  ],
  imports: [
    CommonModule,
    HorizontalSliderModule,
    RouterModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AboutHeaderComponent,
    ClientSayingsComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
