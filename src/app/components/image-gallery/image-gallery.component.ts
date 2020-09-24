import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageModel } from 'src/app/core/models/image.model';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-imagegallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images: ImageModel[];
  filterBy ? = 'all';
  allImages: ImageModel[] = [];

  constructor(private imageService: ImageService) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }
}
