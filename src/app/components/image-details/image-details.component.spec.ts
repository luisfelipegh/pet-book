import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { mockImagesDelatils } from 'src/app/core/mocks/mock-images-details';
import { ImageModel } from 'src/app/core/models/image.model';
import { ImageService } from 'src/app/core/services/image.service';
import { ImageDetailComponent } from './image-details.component';

const Imagesdelatils = mockImagesDelatils;
const testImage: ImageModel = Imagesdelatils.filter(image => image.url === 'assets/images/perro1.jpg')[0];

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  const mockService: ImageService = new ImageService();
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: () => 1,
            },
          },
        },
        { provide: ImageService, useValue: mockService }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(mockService, 'getImage').and.returnValue(testImage);

    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Cuando la imagen existe debe retornar el json de la imagen', () => {
    expect(component.image).toEqual(testImage);
  });

  it('Cuando se carga la vista, debe existir un elemento contenedor de imagenes con la clase img-container', () => {
    expect(fixture.nativeElement.querySelector('.img-container')).toBeDefined();
  });

});
