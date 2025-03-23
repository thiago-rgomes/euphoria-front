import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchQuery: string = '';

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Buscando por:', this.searchQuery);
    }
  }

  onHeartClick(): void {
    console.log('Corazón clickeado');
  }

  onUserClick(): void {
    console.log('Usuário clickeado');
  }

  onCartClick(): void {
    console.log('Carrinho clickeado');
  }


}
