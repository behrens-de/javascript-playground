/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript DEV TOOLS
 */

// ## Konami Code

const pressed = [];
const secretCode = randomString(8);

document.querySelector('.code').innerHTML = secretCode;

window.addEventListener('keyup', e => {

  pressed.push(e.key);

  if (pressed.length > secretCode.length) {
    pressed.shift();
  }

  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }

});


function randomString(number = 5) {
  // Erstelle ein Array mit 26 Buchstaben
  const aplha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let output = '';
  for (var i = 0; i < number; i++) {
    output += aplha[Math.floor(Math.random() * aplha.length)];
  };
  return output.toLowerCase();
}
