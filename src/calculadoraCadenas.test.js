import sumarCadena from './calculadoraCadenas.js';

describe('Calculadora de Cadenas', () => {
  it('debe retornar 0 para una cadena vacia', () => {
    expect(sumarCadena('')).toEqual(0);
  });

  it('debe retornar el numero para una cadena con un solo numero', () => {
    expect(sumarCadena('2')).toEqual(2);
  });

  it('debe sumar dos numeros separados por coma', () => {
    expect(sumarCadena('1,2')).toEqual(3);
  });

  it('debe sumar varios numeros separados por coma', () => {
    expect(sumarCadena('1,2,3')).toEqual(6);
  });

  it('debe aceptar el guion como separador', () => {
    expect(sumarCadena('1-2,3')).toEqual(6);
  });

  it('debe usar un delimitador personalizado', () => {
    expect(sumarCadena('//[;] 6;7;4')).toEqual(17);
  });

  it('debe combinar delimitador personalizado con comas y guiones', () => {
    expect(sumarCadena('//[;] 6,3-2;1')).toEqual(12);
  });

  it('debe ignorar numeros mayores a 1000', () => {
    expect(sumarCadena('2, 1001')).toEqual(2);
  });

  it('debe aceptar un delimitador de cualquier longitud', () => {
    expect(sumarCadena('//[***] 1***2***3')).toEqual(6);
  });

  it('debe aceptar multiples delimitadores', () => {
    expect(sumarCadena('//[*][%] 1*2%3,7-9')).toEqual(22);
  });
});
