import { mockImagesDelatils } from '../mocks/mock-images-details';
import { FilterimagesPipe } from './filterimages.pipe';

const Imagesdelatils = mockImagesDelatils;

describe('FilterimagesPipe', () => {
  let pipe: FilterimagesPipe;

  beforeEach(() => {
    pipe = new FilterimagesPipe();
  });

  it('Debe crear el pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it(`Cuando se pasa 'perro' como parametro al pipe, debe existir un objeto con solo los perros`, () => {
    expect(pipe.transform(Imagesdelatils, 'perro')).toEqual(
      Imagesdelatils.filter(img => img.brand === 'perro')
    );
  });

  it(`Cuando se pasa 'gato' como parametro al pipe, debe existir un objeto con solo los gatos`, () => {
    expect(pipe.transform(Imagesdelatils, 'gato')).toEqual(
      Imagesdelatils.filter(img => img.brand === 'gato')
    );
  });

  it(`Cuando se pasa 'all' como parametro al pipe, debe existir todo el objeto`, () => {
    expect(pipe.transform(Imagesdelatils, 'all')).toEqual(Imagesdelatils);
  });

  it('Cuando no se pasa el parametro al pipe, debe existir el objeto vacio', () => {
    expect(pipe.transform(Imagesdelatils, '')).toEqual([]);
  });

});
