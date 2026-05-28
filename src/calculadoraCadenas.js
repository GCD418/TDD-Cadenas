function sumarCadena(cadena) {
  if (cadena === '') return 0;
  if (cadena.includes(',')) {
    const partes = cadena.split(',');
    return parseInt(partes[0]) + parseInt(partes[1]);
  }
  return parseInt(cadena);
}

export default sumarCadena;
