import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() startIndex: number = 0;
  @Input() endIndex: number = 8;

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor() {
    this.products = [
      { id: 1, title: 'Black Sweatshirt with ....', subTitle: 'Jhanvi’s  Brand', price: 123.00, image: 'home/section6/product-1.png' },
      { id: 2, title: 'line Pattern Black H...', subTitle: 'AS’s  Brand', price: 37.00, image: 'home/section6/product-2.png' },
      { id: 3, title: 'Black Shorts', subTitle: 'MM’s  Brand', price: 37.00, image: 'home/section6/product-3.png' },
      { id: 4, title: 'Levender Hoodie with ....', subTitle: 'Nike’s  Brand', price: 119.00, image: 'home/section6/product-4.png' }
    ];
  }

  ngOnInit() {
    this.filteredProducts = this.products.slice(this.startIndex, this.endIndex);
  }

}
