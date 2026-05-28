import sumarCadena from './calculadoraCadenas.js';

describe('Calculadora de Cadenas', () => {
  it('debe retornar 0 para una cadena vacia', () => {
    expect(sumarCadena('')).toEqual(0);
  });
});
