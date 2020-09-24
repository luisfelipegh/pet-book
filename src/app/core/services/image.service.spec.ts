import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('Debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('Cuando se llame el metodo, entonces debe retornar todas las imagenes (5)', () => {
      const imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('Cuando se pasa un id que existe (1), debe retornar la informacion de ese id', () => {
      const id = 1;
      const imagen = service.getImage(id);
      expect(imagen.id).toEqual(1);
      expect(imagen.brand).toEqual('perro');
      expect(imagen.url).toEqual('assets/images/perro1.jpg');
    });

    it('Cuando se pasa un id que NO existe (100), debe retornar indefinido', () => {
      const id = 100;
      const imagen = service.getImage(id);
      expect(imagen).toEqual(undefined);
    });
  });

});
