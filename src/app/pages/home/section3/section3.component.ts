import { Component } from '@angular/core';
import { PipeWithTextComponent } from "../../../components/pipe-with-text/pipe-with-text.component";
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-section3',
  imports: [PipeWithTextComponent, ButtonComponent],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {

}
