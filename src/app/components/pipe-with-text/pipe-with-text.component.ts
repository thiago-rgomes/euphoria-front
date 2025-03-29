import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pipe-with-text',
  imports: [],
  templateUrl: './pipe-with-text.component.html',
  styleUrl: './pipe-with-text.component.css'
})
export class PipeWithTextComponent {
  @Input() text: string = '';
}
