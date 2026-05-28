function sumarCadena(cadena) {
  if (cadena === '') return 0;

  let numeros = cadena;

  if (cadena.startsWith('//[')) {
    const finDelimitador = cadena.indexOf('] ');
    const delimitador = cadena.substring(3, finDelimitador);
    numeros = cadena.substring(finDelimitador + 2);
    numeros = numeros.split(delimitador).join(',');
  }

  const partes = numeros.split(/[,-]/);
  return partes.reduce((suma, num) => {
    const n = parseInt(num);
    return n > 1000 ? suma : suma + n;
  }, 0);
}

export default sumarCadena;
