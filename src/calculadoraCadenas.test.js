import sumarCadena from './calculadoraCadenas.js';

describe('Calculadora de Cadenas', () => {
  it('debe retornar 0 para una cadena vacia', () => {
    expect(sumarCadena('')).toEqual(0);
  });

  it('debe retornar el numero para una cadena con un solo numero', () => {
    expect(sumarCadena('2')).toEqual(2);
  });
});
