import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-shop-details-images',
  imports: [
    CommonModule,
  ],
  templateUrl: './shop-details-images.component.html',
  styleUrl: './shop-details-images.component.scss'
})
export class ShopDetailsImagesComponent {
  @Input() images: string[] = [];

  public items: GalleryItem[] | undefined;

  constructor(public gallery: Gallery, public lightbox: Lightbox) { };

  ngOnInit() {

    // gallery popup image
    this.items = this.images.map((item) => new ImageItem({ src: item, thumb: item }));

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
