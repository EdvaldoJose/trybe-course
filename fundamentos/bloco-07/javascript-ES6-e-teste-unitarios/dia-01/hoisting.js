var x = 3;

function func(variavel) {
  if (variavel) {
    var x = 48;
  }

  return x;
}

console.log(func(true));
console.log(func(false));
