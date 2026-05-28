function sumarCadena(cadena) {
  if (cadena === '') return 0;
  const partes = cadena.split(',');
  return partes.reduce((suma, num) => suma + parseInt(num), 0);
}

export default sumarCadena;
