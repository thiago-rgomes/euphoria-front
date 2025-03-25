import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';


interface SimpleCategory {
  id: number;
  title: string; 
  imgUrl: string;
}   

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent {

  simpleCategories: SimpleCategory[] = [];

  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
  };

  constructor() {
    this.simpleCategories = [
      {
        id: 1,
        title: 'Knitted Joggers',
        imgUrl: '/home/section2/simple-category-1.png'
      },
      {
        id: 2,
        title: 'Full Sleeve',
        imgUrl: '/home/section2/simple-category-2.png'
      },
      {
        id: 3,
        title: 'Active T-Shirts',
        imgUrl: '/home/section2/simple-category-3.png'
      },
      {
        id: 4,
        title: 'Urban Shirts',
        imgUrl: '/home/section2/simple-category-4.png'
      },
      {
        id: 5,
        title: 'Category 5',
        imgUrl: '/home/section2/simple-category-1.png'
      },
      {
        id: 6,
        title: 'Category 6',
        imgUrl: '/home/section2/simple-category-2.png'
      }
    ];
  }

}
