import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import nft_data from '../../../data/nft-data';
import { NftCardItemComponent } from '../nft-card-item/nft-card-item.component';

@Component({
  selector: 'app-nft-area',
  standalone: true,
  imports: [CommonModule,NftCardItemComponent],
  templateUrl: './nft-area.component.html',
  styleUrl: './nft-area.component.scss'
})
export class NftAreaComponent {

  public nftItems = nft_data.slice(0, 3);
}
