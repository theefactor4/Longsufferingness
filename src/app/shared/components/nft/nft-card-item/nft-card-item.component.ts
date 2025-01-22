import { Component, Input } from '@angular/core';
import { INftType } from '../../../data/nft-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nft-card-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nft-card-item.component.html',
  styleUrl: './nft-card-item.component.scss'
})
export class NftCardItemComponent {
  @Input() item!: INftType;
}
