import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterimagesPipe } from './core/pipes/filterimages.pipe';
import { GalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageDetailComponent } from './components/image-details/image-details.component';
import { ImageService } from './core/services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterimagesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //NgbModule
  ],
  providers: [ImageService, FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
