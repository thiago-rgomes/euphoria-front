import { Component, Input } from '@angular/core';
import { ItemCardComponent } from "../item-card/item-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  @Input() startIndex: number = 0;
  @Input() endIndex: number = 8;

  items: any[] = [];
  filteredItems: any[] = [];

  constructor() {
    this.items = [
      { title: 'Black Sweatshirt with ....', subtitle: 'Jhanvi’s  Brand', price: '123.00', image: 'home/section6/item-1.png' },
      { title: 'line Pattern Black H...', subtitle: 'AS’s  Brand', price: '37.00', image: 'home/section6/item-2.png' },
      { title: 'Black Shorts', subtitle: 'MM’s  Brand', price: '37.00', image: 'home/section6/item-3.png' },
      { title: 'Levender Hoodie with ....', subtitle: 'Nike’s  Brand', price: '119.00', image: 'home/section6/item-4.png' }
    ];
  }

  ngOnInit() {
    this.filteredItems = this.items.slice(this.startIndex, this.endIndex);
  }

}
