import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Section1Component } from "./section1/section1.component";
import { Section2Component } from "./section2/section2.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, Section1Component, Section2Component, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
