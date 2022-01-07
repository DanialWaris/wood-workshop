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
// Directives

@NgModule({
  declarations: [
    FullLayoutComponent,
    NavbarComponent,
    FooterComponent,
    AboutHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AboutHeaderComponent,
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
