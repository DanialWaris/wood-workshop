import { Component, OnInit } from '@angular/core'
import { whatWeDoData } from './../../../shared/APIData/HomeData'
@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css'],
})
export class WhatWeDoComponent implements OnInit {
  public items: any = []
  xsSlides: any = 1
  smSlides: any = 2
  mdSlides: any = 3
  lgSlides: any = 4
  constructor() {
    setTimeout(() => {
      this.items = whatWeDoData
    }, 3000)
  }

  ngOnInit(): void {}
}
