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

  fadeIn: boolean = true;

  changeStep(stepIndex: number) {
    this.fadeIn = false;
    setTimeout(() => {
      this.currentStep = stepIndex;
      this.fadeIn = true;
    }, 400);
  }

  leftPreviousStep() {
    if (this.currentStep > 0) {
      this.changeStep(this.currentStep - 1);
    }
  }

  rightNextStep() {
    if (this.currentStep < this.frasesHijo.length - 1) {
      this.changeStep(this.currentStep + 1);
    }
  }

  goToStep(stepIndex: number) {
    if (stepIndex >= 0 && stepIndex < this.frasesHijo.length) {
      this.changeStep(stepIndex);
    }
  }

}
