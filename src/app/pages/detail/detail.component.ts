import { Component } from '@angular/core';
import { Section1Component } from "./section1/section1.component";

@Component({
  selector: 'app-detail',
  imports: [Section1Component],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
