import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextAnimationDirective } from '../../../../directive/text-animation.directive';
import { IRoadMap } from '../../../types/road-map-d';

@Component({
    standalone: true,
    selector: 'app-road-map-area',
    imports: [CommonModule, RouterModule, TextAnimationDirective],
    templateUrl: './road-map-area.component.html',
    styleUrl: './road-map-area.component.scss'
})
export class RoadMapAreaComponent {


  road_map_lists: IRoadMap[] = [
    {
      id: 1,
      active: true,
      title: "season 1",
      lists: [
        { active: true, text: "Battle Practice Mode" },
        { active: true, text: "iOS Open Beta" },
        { active: true, text: "Land Creation & Building" },
        { active: true, text: "Land Creation & Building" },
      ],
    },
    {
      id: 2,
      active: false,
      title: "season 2",
      lists: [
        { active: true, text: "Battle Practice Mode" },
        { active: true, text: "iOS Open Beta" },
        { active: false, text: "Land Creation & Building" },
        { active: false, text: "Land Creation & Building" },
      ],
    },
    {
      id: 3,
      active: false,
      title: "season 3",
      lists: [
        { active: false, text: "Battle Practice Mode" },
        { active: false, text: "iOS Open Beta" },
        { active: false, text: "Land Creation & Building" },
        { active: false, text: "Land Creation & Building" },
      ],
    },
  ];
}
