import { Component } from '@angular/core';
import { PipeWithTextComponent } from "../../../components/pipe-with-text/pipe-with-text.component";
import { ProductListComponent } from "../../../components/product-list/product-list.component";

@Component({
  selector: 'app-section6',
  imports: [PipeWithTextComponent, ProductListComponent],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.css'
})
export class Section6Component {

}
