// import { Injectable } from '@angular/core'
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router,
// } from '@angular/router'
// import { Observable } from 'rxjs'
// // import { AuthService } from '../services/firebase/auth.service'
// // import { LoginService } from '../services/login/login.service'

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminGuard implements CanActivate {
//   abc: any = false
//   constructor(
//     public authService: AuthService,
//     public loginService: LoginService,
//     public router: Router,
//   ) {}
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot,
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     // Guard for user is login or not
//     let user = localStorage.getItem('user')
//     let userData: any = localStorage.getItem('userDataDetails')
//     userData = JSON.parse(userData)
//     let token: any = localStorage.getItem('userToken')
//     if (!user || !userData) {
//       this.router.navigate(['/auth/login'])
//       return true
//     }
//     if (!token) {
//       this.router.navigate(['/auth/login'])
//       return true
//     }
//     if (userData) {
//       this.loginService.setData(userData)
//     }
//     return true
//   }
// }
