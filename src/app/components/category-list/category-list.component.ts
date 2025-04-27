import { Component, Input, OnInit } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-list',
  imports: [CategoryCardComponent, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  @Input() startIndex: number = 0;
  @Input() endIndex: number = 8;

  categories: Category[] = [];
  filteredCategories: Category[] = [];

  constructor() {
    this.categories = [
      { name: 'Shirts', image: 'home/section4/category-man-1.png' },
      { name: 'Printed T-Shirts', image: 'home/section4/category-man-2.png' },
      { name: 'Plain T-Shirt', image: 'home/section4/category-man-3.png' },
      { name: 'Polo T-Shirt', image: 'home/section4/category-man-4.png' },
      { name: 'Hoodies & Sweatshirt', image: 'home/section4/category-man-5.png' },
      { name: 'Jeans', image: 'home/section4/category-man-6.png' },
      { name: 'Activewear', image: 'home/section4/category-man-7.png' },
      { name: 'Boxers', image: 'home/section4/category-man-8.png' },
      { name: 'Hoodies & Sweetshirt', image: 'home/section4/category-woman-1.png' },
      { name: 'Coats & Parkas', image: 'home/section4/category-woman-2.png' },
      { name: 'Tees & T-Shirt', image: 'home/section4/category-woman-3.png' },
      { name: 'Boxers', image: 'home/section4/category-woman-4.png' }
    ];
  }

  ngOnInit() {
    this.filteredCategories = this.categories.slice(this.startIndex, this.endIndex);
  }
}
