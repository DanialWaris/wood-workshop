import { Component, OnInit } from '@angular/core'
import { addressData } from './../../../shared/APIData/ContactUsData'
@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css'],
})
export class GetInTouchComponent implements OnInit {
  addressData: any = addressData
  constructor() {}

  ngOnInit(): void {}
}
