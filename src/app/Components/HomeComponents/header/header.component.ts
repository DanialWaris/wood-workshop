import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public items: string[] = []
  constructor() {
    setTimeout(() => {
      this.items = [
        'https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp',
        'https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp',
        'https://mdbootstrap.com/img/Photos/Slides/img%20(70).webp',
      ]
    }, 3000)
  }

  ngOnInit(): void {}
}
