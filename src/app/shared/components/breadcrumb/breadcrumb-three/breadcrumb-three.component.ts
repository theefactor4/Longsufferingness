import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-three',
  imports: [RouterModule],
  templateUrl: './breadcrumb-three.component.html',
  styleUrl: './breadcrumb-three.component.scss'
})
export class BreadcrumbThreeComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
