import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  imports: [CommonModule],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.css'
})
export class GallerySectionComponent {
  @Input() images: string[] = [];

  selectedImage: string = '';

  ngOnInit(): void {
    if (this.images && this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
