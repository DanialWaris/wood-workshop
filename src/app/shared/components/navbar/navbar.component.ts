import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNav:any = false
  fixedNav:any = false
  constructor() { 
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScrollWindow)
  }

  onScrollWindow = () =>{
    if(window.scrollY ){
      this.fixedNav = true
    }
    else{
      this.fixedNav = false
    }
  }

}
