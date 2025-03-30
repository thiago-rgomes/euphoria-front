import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Section1Component } from "./section1/section1.component";
import { Section2Component } from "./section2/section2.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Section3Component } from "./section3/section3.component";
import { Section4Component } from "./section4/section4.component";
import { Section5Component } from "./section5/section5.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, Section1Component, Section2Component, FooterComponent, Section3Component, Section4Component, Section5Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
