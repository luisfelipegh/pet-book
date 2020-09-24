import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FilterimagesPipe } from './pipes/filterimages.pipe';
import { ImageService } from './services/image.service';



@NgModule({
  declarations: [ FilterimagesPipe, ImageService  ],
  imports: [CommonModule, HttpClientModule],
  providers: [],
  exports: [ FilterimagesPipe, ImageService  ]
})
export class CoreModule {}
