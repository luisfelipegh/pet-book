import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockImagesDelatils } from 'src/app/core/mocks/mock-images-details';
import { FilterimagesPipe } from 'src/app/core/pipes/filterimages.pipe';
import { ImageService } from 'src/app/core/services/image.service';
import { GalleryComponent } from './image-gallery.component';

const Imagesdelatils = mockImagesDelatils;

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let mockService: ImageService = new ImageService();
  let mockPipe: FilterimagesPipe = new FilterimagesPipe();
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [
        { provide: ImageService, useValue: mockService },
        { provide: FilterimagesPipe, useValue: mockPipe }
      ]
    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    spy = spyOn(mockService, 'getImages').and.returnValues(Imagesdelatils);

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it(`Cuando se carga la vista, debe existir un boton que contenga 'All'`, () => {
    const btnAll = fixture.debugElement.nativeElement.querySelector('#All');
    expect(btnAll.textContent).toContain('All');
  });

  it(`Cuando se carga la vista, debe existir un boton que contenga 'Perro'`, () => {
    const btnPerro = fixture.debugElement.nativeElement.querySelector('#Perro');
    expect(btnPerro.textContent).toContain('Perro');
  });

  it(`Cuando se carga la vista, debe existir un boton que contenga 'Gato'`, () => {
    const btnGato = fixture.debugElement.nativeElement.querySelector('#Gato');
    expect(btnGato.textContent).toContain('Gato');
  });

  it(`Debe tener la variable 'images' y no estar definida`, () => {
    expect(component.images).toBeUndefined();
  });
  it(`Debe tener  la variable 'filterBy' y ser igual a 'all'`, () => {
    expect(component.filterBy).toEqual('all');
  });
  it(`Debe tener la variable 'allImages' y tener todas las imagenes`, () => {
    expect(component.allImages).toEqual(Imagesdelatils);
  });
  it(`Debe tener un metodo 'ngOnChanges()'`, () => {
    expect(component.ngOnChanges()).toBeUndefined();
  });

});
