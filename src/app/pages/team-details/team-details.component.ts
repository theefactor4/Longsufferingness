import sal from 'sal.js';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { all_teams } from '../../shared/data/team-data';
import { HeaderOneComponent } from '../../shared/layout/header/header-one/header-one.component';
import { BreadcrumbOneComponent } from '../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { FooterOneComponent } from '../../shared/layout/footer/footer-one/footer-one.component';
import { ITeam } from '../../shared/types/team-d-t';
import { CommonModule } from '@angular/common';
import { DotsComponent } from '../../shared/components/svg/dots.component';
import { VideoAreaComponent } from '../../shared/components/video/video-area/video-area.component';
import { TeamAreaComponent } from '../../shared/components/team/team-area/team-area.component';
import { VideoPopupComponent } from '../../shared/components/video/video-popup/video-popup.component';

@Component({
  selector: 'app-team-details',
  imports: [
    CommonModule,
    HeaderOneComponent,
    BreadcrumbOneComponent,
    VideoAreaComponent,
    TeamAreaComponent,
    FooterOneComponent,
    DotsComponent,
    VideoPopupComponent,
  ],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss'
})
export class TeamDetailsComponent {

  teamId: string | null = null;
  team_data = [...all_teams];
  selectedTeam: ITeam | undefined = undefined;
  notFoundMessage: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.teamId = params.get('id');

      // Check if teamId is provided and valid
      if (this.teamId) {
        this.selectedTeam = this.team_data.find(
          (team) => team.id === Number(this.teamId)
        );

        if (!this.selectedTeam) {
          this.notFoundMessage = `The team with ID ${this.teamId} does not exist.`;
        }
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      sal({ threshold: 0.1, once: true, root: null });
    }, 500)
  }
}
