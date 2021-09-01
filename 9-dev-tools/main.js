/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript DEV TOOLS
 */

// ## Draw with Canvas


const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
// %s ist ein platzhalter für einen String
console.log('Hallo')

// Interpolated
// %s ist ein platzhalter für einen String
console.log('ich bin ein %s String','toller');

// Styled
console.log('%cRoter Text','color: red; width: 100%; float: left; border-bottom: 3px dotted #999');

// warning!

console.warn("OH NO");

// Error :|
console.error("Hier ist was Falsch gelaufen");
// Info
console.info("Krokodiele sind wilde Tiere");
// Testing

console.log(document.querySelector('.complete-blog-post').textContent.replace(/ /gi, ""))
// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing

