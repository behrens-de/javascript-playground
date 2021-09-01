/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript Arrays
 */

// ## Draw with Canvas

const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight - 200;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "#000000";
ctx.lineJoin = "miter";
ctx.lineCap = "round";
ctx.lineWidth = 20;

const download = document.getElementById("download");
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let isHsl = false;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);

  const color = document.querySelector("#color");
  ctx.strokeStyle = !color ? `hsl(${hue}, 100%, 50%)` : color.value;

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function getRandID() {
  const timeStamp = new Date().getTime();
  const salt = Math.floor(Math.random() * (999 - 100)) + 100;
  const id = timeStamp.toString().slice(4).split("").reverse().join("");

  const myID = [];

  const idArr = Number(id + salt)
    .toString()
    .split("");

  idArr.forEach((item) => {
    myID.push(String.fromCharCode(65 + (Number(item) + 1)));
  });

  return myID.join("");
}

function passWordGenerator(arr = [0, 0, 0, 0]) {
  // ASCII DEZIMALZAHLEN VON 33 - 126;
  const ASCII = [
    [97, 122], // small Letters
    [65, 90], // big Letters
    [48, 57], // Numbers
    [
      [33, 47], // Special Charakters
      [58, 64], // Special Charakters
      [91, 96], // Special Charakters
      [123, 126], // Special Charakters
    ],
  ];

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getASCII(min, max, times) {
    passWord = "";
    for (let i = 0; i < times; i++) {
      const rand = Math.floor(Math.random() * (max - min)) + min;
      passWord = passWord + String.fromCharCode(rand);
    }
    return passWord;
  }

  let index = 0;
  let pass = "";

  while (index < arr.length) {
    if (ASCII[index].length === 2) {
      pass = pass + getASCII(ASCII[index][0], ASCII[index][1], arr[index]);
    } else {
      const rand =
        Math.floor(Math.random() * (ASCII[index].length - 1 - 0)) + 0;
      pass =
        pass +
        getASCII(ASCII[index][rand][0], ASCII[index][rand][1], arr[index]);
    }
    index++;
  }

  return shuffle(pass.split("")).join('');
}

console.log(passWordGenerator([4, 4, 4, 4]));

// Download the Image
download.addEventListener("click", function (e) {
  console.log(canvas.toDataURL());
  const link = document.createElement("a");
  const name = getRandID();

  //console.log(name);

  link.download = `bild-${name}.png`;
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
