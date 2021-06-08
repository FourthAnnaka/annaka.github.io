var img = document.createElement ("img");
img.classList.add('eyes')
img.src = '';


function none(){
img.src = '';
}

function bezos(){
img.src = 'img/eye.png';
}
function zucks(){
img.src = 'img/zuck_eye.png';
}
function theil(){
img.src = 'img/thiel_eye.png';
}
function page(){
img.src = 'img/page_eye.png';
}
function musk(){
img.src = 'img/musk_eye.png';
}


window.onload = function() {
var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var tracker = new tracking.ObjectTracker(['eye']);
tracker.setInitialScale(1.25);
tracker.setStepSize(3);
tracker.setEdgesDensity(0.15);


tracking.track('#video', tracker, { camera: true });
tracker.on('track', function(event) {



context.clearRect(0, 0, canvas.width, canvas.height);
event.data.forEach(function(rect) {

context.drawImage(img, rect.x -0.5, rect.y +10, rect.width * 1, rect.height * .5);

});
});

var gui = new dat.GUI();
gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
gui.add(tracker, 'initialScale', .25, 5.0).step(0.05);
gui.add(tracker, 'stepSize', 1, 5).step(0.1);

};

