import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nft-area-two',
  imports: [CommonModule,RouterModule],
  templateUrl: './nft-area-two.component.html',
  styleUrl: './nft-area-two.component.scss',
})
export class NftAreaTwoComponent {
  nftItems = [
    {
      id: 1,
      imgSrc: '/assets/img/nft/nft_img3-1.png',
      subtitle: 'SUPPORT',
      title: 'The Monster Claw',
    },
    {
      id: 2,
      imgSrc: '/assets/img/nft/nft_img3-2.png',
      subtitle: 'SUPPORT',
      title: 'The Monster Claw',
    },
    {
      id: 3,
      imgSrc: '/assets/img/nft/nft_img3-3.png',
      subtitle: 'SUPPORT',
      title: 'The Monster Claw',
    },
  ];
}
