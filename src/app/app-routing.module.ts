import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailComponent } from './components/image-details/image-details.component';
import { GalleryComponent } from './components/image-gallery/image-gallery.component';


const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
