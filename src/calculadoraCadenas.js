function sumarCadena(cadena) {
  if (cadena === '') return 0;

  let numeros = cadena;

  if (cadena.startsWith('//[')) {
    const finPrefijo = cadena.indexOf(' ');
    const prefijo = cadena.substring(2, finPrefijo);
    numeros = cadena.substring(finPrefijo + 1);

    const delimitadores = prefijo.match(/\[([^\]]+)\]/g);
    if (delimitadores) {
      delimitadores.forEach(d => {
        const delim = d.slice(1, -1);
        numeros = numeros.split(delim).join(',');
      });
    }
  }

  const partes = numeros.split(/[,-]/);
  return partes.reduce((suma, num) => {
    const n = parseInt(num);
    return n > 1000 ? suma : suma + n;
  }, 0);
}

export default sumarCadena;
