import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.css']
})
export class AboutHeaderComponent implements OnInit {

  @Input() title:any = ''
  constructor() { }

  ngOnInit(): void {
  }

}
