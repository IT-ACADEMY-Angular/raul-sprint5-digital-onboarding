import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { IStep } from '../../interfaces/i-step';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  frasesPadre: IStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.frasesPadre = this.stepsService.getFrases();
  }

}
