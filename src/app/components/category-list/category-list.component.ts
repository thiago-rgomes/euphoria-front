import { Component, Input, OnInit } from '@angular/core';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

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

  constructor(private categoryService: CategoryService) { }


  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.updateFilteredCategories();
    });
  }
  private updateFilteredCategories() {
    this.filteredCategories = this.categories.slice(this.startIndex, this.endIndex);
  }
}
