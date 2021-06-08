// Get the element on the page with the id canvas
let canvas = document.getElementById("canvas");
let points = { x: 0, y: 0 };
let isDrawing = false;
let currentEmoji = "🦇";
const emojiList = ["🦅", "🐝", "🧚🏻", "🦟", "🦋", "🐥"];

function draw() {
  let newEmoji = document.createElement("div");
  newEmoji.classList.add("emoji");
  newEmoji.innerHTML = currentEmoji;
  (newEmoji.style.left = event.pageX - 55 + "px"),
    (newEmoji.style.top = event.pageY - 55 + "px");
  canvas.appendChild(newEmoji);
}

canvas.addEventListener("mousedown", function (event) {
  isDrawing = true;
  draw();
});

canvas.addEventListener("mousemove", function (event) {
  if (isDrawing) {
    draw();
  }
});

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
});

window.addEventListener("resize", resize);

function resize() {
  console.log("resizing the browsers");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(canvas.width + "px", canvas.height + "px");
}

function randomEmoji() {
  currentEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
}

//  delete key clears anything inside #canvas
document.addEventListener("keydown", function (pressed) {
  if (pressed.key === "Backspace") {
    const canvasClear = document.getElementById("canvas");
    canvasClear.innerHTML = "";
    console.log("Canvas cleared!");
  } else if (pressed.key === "a") {
    randomEmoji();
  } else {
    console.log("This key does nothing.");
  }
});
