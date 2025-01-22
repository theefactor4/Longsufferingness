import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-footer-one',
  imports: [RouterModule],
  templateUrl: './footer-one.component.html',
  styleUrl: './footer-one.component.scss',
})
export class FooterOneComponent {
  year = new Date().getFullYear();
}
