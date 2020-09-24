import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ImageDetailComponent } from './image-details/image-details.component';
import { GalleryComponent } from './image-gallery/image-gallery.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ImageDetailComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    ImageDetailComponent,
    GalleryComponent,
  ]
})
export class ComponentsModule { }
