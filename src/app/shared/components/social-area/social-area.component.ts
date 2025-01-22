import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextAnimationComponent } from '../text-animation/text-animation.component';

@Component({
  selector: 'app-social-area',
  imports: [CommonModule,TextAnimationComponent],
  templateUrl: './social-area.component.html',
  styleUrl: './social-area.component.scss',
})
export class SocialAreaComponent {
  social_data = [
    {
      id: 1,
      link: 'https://www.facebook.com/',
      icon: 'flaticon-facebook',
      title: 'facebook',
    },
    {
      id: 2,
      link: 'https://twitter.com/',
      icon: 'flaticon-twitter',
      title: 'twitter',
    },
    {
      id: 3,
      link: 'https://www.instagram.com/',
      icon: 'flaticon-instagram',
      title: 'instagram',
    },
    {
      id: 4,
      link: 'https://www.youtube.com/',
      icon: 'flaticon-youtube',
      title: 'youtube',
    },
    {
      id: 5,
      link: 'https://discord.com/',
      icon: 'flaticon-discord',
      title: 'discord',
    },
    {
      id: 6,
      link: 'https://www.twitch.tv/',
      icon: 'flaticon-twitch',
      title: 'twitch',
    },
  ];
}
