// Get the element on the page with the id canvas
let canvas = document.querySelector("#canvas");
// ctx = canvas.getContext("2d");
let isDrawing, points = [];


// TODO: Replace with your own emoji
let currentEmoji = "🦋";

// Detect the moment we press the mouse down on the canvas div
canvas.addEventListener("mousedown", function (event) {
  isDrawing = true;

  // Create a new emoji div on the page and set it equal to your desired emoji
  let newEmoji = document.createElement("div");
  newEmoji.classList.add("emoji");
  newEmoji.innerHTML = currentEmoji;

  // // Set the style of that position so that it goes where you just pressed your mouse down
  // newEmoji.style.left = (event.pageX - 55) + "px";
  // newEmoji.style.top = (event.pageY - 55) + "px";

  points.push({ 
    x: newEmoji.style.left = (event.pageX - 55) + "px",
    y: newEmoji.style.top = (event.pageY - 55) + "px"
  });

  // Add that emoji to the canvas element so that it appears on the screen
  canvas.appendChild(newEmoji);

  canvas.onmousemove = function(event) {
    if (!isDrawing) return;
    points.push({ 
      x: newEmoji.style.left = (event.pageX - 55) + "px",
      y: newEmoji.style.top = (event.pageY - 55) + "px"
    });
  }
  
  
  canvas.addEventListener("mouseup", function (event) {
    isDrawing = false;
  })
  
})



//  delete key clears anything inside #canvas
document.addEventListener("keydown", function(pressed) {
  if (pressed.key === "Backspace") {
    const canvasClear = document.getElementById("canvas");
    canvasClear.innerHTML = "";
    console.log("Canvas cleared!");
  } else {
    console.log("This key does nothing.");
  }

})