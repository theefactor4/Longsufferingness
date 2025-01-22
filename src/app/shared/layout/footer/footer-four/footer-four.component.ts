import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-four',
  imports: [RouterModule],
  templateUrl: './footer-four.component.html',
  styleUrl: './footer-four.component.scss'
})
export class FooterFourComponent {

  currentYear = new Date().getFullYear();
}
