import { Routes, RouterModule } from '@angular/router'

export const full: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./../../Pages/home/home.module').then(
        (m) => m.HomeModule,
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./../../Pages/about-us/about-us.module').then(
        (m) => m.AboutUsModule,
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./../../Pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule,
      ),
  },
]
