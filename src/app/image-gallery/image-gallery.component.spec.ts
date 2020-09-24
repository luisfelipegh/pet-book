import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterimagesPipe } from '../pipes/filterimages.pipe';
import { ImageService } from '../services/image.service';

import { GalleryComponent } from './image-gallery.component';

const Imagesdelatils = [    
  { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
  { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
  { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
  { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
  { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
] 

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let mockService: ImageService = new ImageService();
  let mockPipe: FilterimagesPipe = new FilterimagesPipe();
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      providers: [
        { provide: ImageService, useValue: mockService },
        { provide: FilterimagesPipe, useValue: mockPipe }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(mockService, 'getImages').and.returnValues(Imagesdelatils);

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('Debe crear el componente', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Cuando se carga la vista, debe existir un boton que contenga "All"', () => {
  //   const btnAll = fixture.debugElement.nativeElement.querySelector('#All');
  //   expect(btnAll.textContent).toContain('All');
  //  });

  // it('Cuando se carga la vista, debe existir un boton que contenga "Perro"', () => {
  //   const btnPerro = fixture.debugElement.nativeElement.querySelector('#Perro');
  //   expect(btnPerro.textContent).toContain('Perro');
  //  });

  // it('Cuando se carga la vista, debe existir un boton que contenga "Gato"', () => {
  //   const btnGato = fixture.debugElement.nativeElement.querySelector('#Gato');
  //   expect(btnGato.textContent).toContain('Gato');
  //  });


  
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
