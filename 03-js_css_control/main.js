/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript CSS Control
 */

const inputs = document.querySelectorAll(".controls input");

function renderImage() {
  const imgFrame = document.querySelector(".output");
  imgFrame.innerHTML = "<h4>Bitte warten:<br>Ein Bild wird geladen</h4>";

  fetch(
    `https://source.unsplash.com/${imgFrame.clientWidth}x${imgFrame.clientHeight}/?dogs`
  ).then((response) => {
    imgFrame.innerHTML = `<img class="img1" src="${response.url}" alt="beach image"/>`;
  });
}

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  const name = this.name;

  if (name === "grayscale") {
    console.log(Number(this.value).toFixed(2) / 100);
  }

  if (name === "base") {
    document.documentElement.style.setProperty(`--rangeBGSlider`, this.value);
    if(!isLight(this.value)){
      document.querySelector('.h1').classList.add('dark');
    } else{
      document.querySelector('.h1').classList.remove('dark');

    }
  }

  const property = document.documentElement.style.setProperty(
    `--${name}`,
    this.value + suffix
  );

  //console.log(name+'='+this.value+suffix);
}

function isLight(color) {
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  // Using the HSP value, determine whether the color is light or dark
  return hsp > 127.5 ? true : false;
}


inputs.forEach((input) => input.addEventListener("input", handleUpdate));

window.addEventListener("load", renderImage);

const newImgBtn = document.querySelector(".newImg");

newImgBtn.addEventListener("click", renderImage);
