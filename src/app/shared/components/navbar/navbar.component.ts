import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showNav: any = false
  fixedNav: any = false
  tabsData: any = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'SERVICES', path: '' },
    { name: 'PROJECT', path: '' },
    { name: 'PAGES', path: '' },
    { name: 'CONTACT US', path: '' },
  ]
  constructor(public router: Router) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScrollWindow)
  }

  onScrollWindow = () => {
    if (window.scrollY) {
      this.fixedNav = true
    } else {
      this.fixedNav = false
    }
  }
  routingFunc(path: any) {
    this.router.navigateByUrl(path)
  }
}
