import { Component, OnInit } from '@angular/core'
import { NgxGalleryOptions } from '@kolkov/ngx-gallery'
import { NgxGalleryImage } from '@kolkov/ngx-gallery'
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery'
import { latestProjectsData } from './../../../shared/APIData/HomeData'
@Component({
  selector: 'app-latest-projects',
  templateUrl: './latest-projects.component.html',
  styleUrls: ['./latest-projects.component.css'],
})
export class LatestProjectsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = []
  galleryImages: NgxGalleryImage[] = []
  latestProjectsData:any = latestProjectsData
  tab: any = 'All'
  constructor() {}

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '70rem',
        height: '600px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Zoom,
        imageSwipe: true,
        imageAutoPlay: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        imageAnimation: NgxGalleryAnimation.Zoom,
        thumbnailsColumns: 3,
        thumbnailsPercent: 20,
        thumbnailsMargin: 10,
        thumbnailMargin: 10,
        imageSwipe: true,
        imageAutoPlay: true,
      },
      // max-width 600
      {
        breakpoint: 600,
        thumbnailsColumns: 2,
        imageAnimation: NgxGalleryAnimation.Zoom,
        imagePercent: 60,
        preview: false,
        imageSwipe: true,
        imageAutoPlay: true,
        thumbnailMargin: 6,
      },
      // max-width 400
      {
        breakpoint: 400,
        thumbnailsColumns: 1,
        imageAnimation: NgxGalleryAnimation.Zoom,
        imagePercent: 50,
        preview: false,
        imageSwipe: true,
        imageAutoPlay: true,
        thumbnailMargin: 6,
      },
    ]

    this.galleryImages = [
      {
        small:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
        medium:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
        big:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
      },
      {
        small:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
        medium:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
        big:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
      },
      {
        small:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
        medium:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
        big:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
      },
      {
        small:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
        medium:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
        big:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
      },
      {
        small:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
        medium:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
        big:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/2.jpg',
      },
      {
        small:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
        medium:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
        big:
          'http://designarc.biz/demos/wood-workshop/images/slider-img/bg.jpg',
      },
    ]
  }
}
