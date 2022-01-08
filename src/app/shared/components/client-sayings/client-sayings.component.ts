import { Component, OnInit } from '@angular/core'
import { clentSayingData } from './../../APIData/HomeData'
@Component({
  selector: 'app-client-sayings',
  templateUrl: './client-sayings.component.html',
  styleUrls: ['./client-sayings.component.css'],
})
export class ClientSayingsComponent implements OnInit {
  public items: any = []
  xsSlides: any = 1
  smSlides: any = 2
  mdSlides: any = 2
  lgSlides: any = 2
  constructor() {
    setTimeout(() => {
      this.items = clentSayingData
    }, 3000)
  }

  ngOnInit(): void {}
}
