import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  const pipe = new FilterimagesPipe();

  it('Cuando se carga la vista, debe existir una instacia del componente', () => {
    expect(pipe).toBeTruthy();
  });

});
