import { Component } from '@angular/core';
import { PipeWithTextComponent } from "../../../components/pipe-with-text/pipe-with-text.component";
import { ItemListComponent } from "../../../components/item-list/item-list.component";

@Component({
  selector: 'app-section6',
  imports: [PipeWithTextComponent, ItemListComponent],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.css'
})
export class Section6Component {

}
