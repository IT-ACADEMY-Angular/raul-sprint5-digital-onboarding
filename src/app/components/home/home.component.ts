import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
