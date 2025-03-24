import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = 'Shop Now';
  @Input() fontSize: string = '20px';
  @Input() fontWeight: string = 'bold';
  @Input() fontColor: string = 'black';
  @Input() bgColor: string = 'white';
  @Input() width: string = '250px';
  @Input() height: string = '60px';
  @Input() border: string = 'none';
  @Input() borderColor: string = 'none';
  @Input() borderRadius: string = '4px';
  @Input() cursor: string = 'pointer';
  @Input() hoverOpacity: number = 0.7;  
}
