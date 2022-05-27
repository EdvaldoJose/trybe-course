// o que são os false em javascript (null, undefined, 0, '', false).

console.log(!null); // true
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!0); // false
console.log(!''); // true

if(1){
  console.log('xablau');
}
if(null){
  console.log('1');
}