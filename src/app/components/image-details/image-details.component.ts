import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailComponent {
  image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image = this.imageService.getImage(this.route.snapshot.params.id);
  }
}
