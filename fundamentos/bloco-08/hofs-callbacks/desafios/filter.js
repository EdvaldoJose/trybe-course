const list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];

function countDevelopers(list) {
  const callb = (dev) => dev.continent === 'Europe' && dev.language === 'JavaScript';
  const filtered = list.filter(callb);
 
  return filtered.length;
}
console.log(countDevelopers(filtered));
// console.log(countDevelopers());

const countDevelopers = (list) => list.filter((dev) => dev.continent === 'Europe' && dev.language === 'JavaScript').length;
