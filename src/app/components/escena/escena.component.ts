import { Component, Input } from '@angular/core';
import { IStep } from '../../interfaces/i-step';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'escena-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input() frasesHijo: IStep[] = [];
}
