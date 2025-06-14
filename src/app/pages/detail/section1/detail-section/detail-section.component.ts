import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { ButtonComponent } from "../../../../components/button/button.component";

@Component({
  selector: 'app-detail-section',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './detail-section.component.html',
  styleUrl: './detail-section.component.css'
})
export class DetailSectionComponent {
  @Input() details!: Product;
}
