import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-two',
  imports: [CommonModule,RouterModule],
  templateUrl: './breadcrumb-two.component.html',
  styleUrl: './breadcrumb-two.component.scss'
})
export class BreadcrumbTwoComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
}
