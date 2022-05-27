// transforme numeros em binários

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

console.log(dec2bin(1234));