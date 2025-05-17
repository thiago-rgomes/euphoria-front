import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  @Input() startIndex: number = 0;
  @Input() endIndex: number = 8;

  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.updateFilteredProducts();
    });
  }

  private updateFilteredProducts() {
    this.filteredProducts = this.products.slice(this.startIndex, this.endIndex);
  }

}
