import { Component } from '@angular/core';
import { CarouselComponent } from "../../../components/carousel/carousel.component";
import { PipeWithTextComponent } from "../../../components/pipe-with-text/pipe-with-text.component";

@Component({
  selector: 'app-section2',
  imports: [CarouselComponent, PipeWithTextComponent],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

}
