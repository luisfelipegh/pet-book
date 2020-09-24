import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // fit('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // fit('should images be a ', () => {
  //   expect(component.images).toBeUndefined();
  // });
  // fit('should filterBy be a ', () => {
  //   expect(component.filterBy).toEqual('all');
  // });
  // fit('should allImages be a ', () => {
  //   expect(component.allImages).toEqual([]);
  // });
  // fit('should executed method ngOnChanges()', () => {
  //   expect(component.ngOnChanges()).toBeUndefined();
  // });

});
