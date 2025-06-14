import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { GallerySectionComponent } from "./gallery-section/gallery-section.component";
import { DetailSectionComponent } from "./detail-section/detail-section.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section1',
  imports: [GallerySectionComponent, DetailSectionComponent, CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  console.log('ID from route:', id);

  this.productService.getProducts().subscribe(products => {
    console.log('Products:', products);

    const found = products.find(p => +p.id === id);
    if (found) {
      this.product = found;
      console.log('Selected product:', this.product);
    } else {
      console.warn('Product not found for ID:', id);
    }
  });
}
}
