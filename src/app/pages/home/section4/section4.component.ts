import { Component } from '@angular/core';
import { PipeWithTextComponent } from "../../../components/pipe-with-text/pipe-with-text.component";
import { CategoryListComponent } from "../../../components/category-list/category-list.component";

@Component({
  selector: 'app-section4',
  imports: [PipeWithTextComponent, CategoryListComponent],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.css'
})
export class Section4Component {

}
