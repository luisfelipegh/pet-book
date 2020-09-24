import { FilterimagesPipe } from './filterimages.pipe';

const Imagesdelatils = [    
  { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
  { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
  { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
  { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
  { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
] 

describe('FilterimagesPipe', () => {
  const pipe = new FilterimagesPipe();

  it('Debe crear el pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it ("Cuando se pasa 'perro' como parametro al pipe, debe existir un objeto con solo los perros", () => {
    let piping= new FilterimagesPipe();
    expect(piping.transform(Imagesdelatils, "perro")).toEqual([
        { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
        { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
        { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" }
    ]);
  });

  it ("Cuando se pasa 'gato' como parametro al pipe, debe existir un objeto con solo los gatos", () => {
    let piping= new FilterimagesPipe();
    expect(piping.transform(Imagesdelatils, "gato")).toEqual([
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" }
    ]);
  });

  it ("Cuando se pasa 'all' como parametro al pipe, debe existir todo el objeto", () => {
    let piping= new FilterimagesPipe();
    expect(piping.transform(Imagesdelatils, "all")).toEqual(Imagesdelatils);
  });

  it ("Cuando no se pasa el parametro al pipe, debe existir el objeto vacio", () => {
    let piping= new FilterimagesPipe();
    expect(piping.transform(Imagesdelatils, "")).toEqual([]);
  });

});
