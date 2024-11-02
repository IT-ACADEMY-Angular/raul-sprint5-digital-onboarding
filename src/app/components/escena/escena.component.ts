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

  currentStep: number = 0;

  leftPreviousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  rightNextStep() {
    if (this.currentStep < this.frasesHijo.length - 1) {
      this.currentStep++;
    }
  }

}
