import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
// import { ContentLayoutComponent } from './shared/components/layout/content-layout/content-layout.component'
import { FullLayoutComponent } from './shared/components/layout/full-layout/full-layout.component'
// import { content } from './shared/routes/content-routes'
import { full } from './shared/routes/full.routes'
// import { AdminGuard } from './shared/guard/admin.guard'
import { HomeComponent } from './Pages/home/home.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: FullLayoutComponent,
    // canActivate: [AdminGuard],
    children: full,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy',
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
