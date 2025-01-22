import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-one',
  imports: [CommonModule,RouterModule],
  templateUrl: './breadcrumb-one.component.html',
  styleUrl: './breadcrumb-one.component.scss'
})
export class BreadcrumbOneComponent {

  @Input() bg: string = '/assets/img/bg/breadcrumb_bg01.jpg';
  @Input() brd_img: string = '/assets/img/others/breadcrumb_img01.png';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
