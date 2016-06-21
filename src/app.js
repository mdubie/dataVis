var drawCanvas = function(){
  var $canvas = $('#myCanvas');
  var canvas = $canvas.get(0).getContext("2d");
  canvas.FPS = 30;
  return canvas;
};

let a = 5;

var updateItems = function() {

};

var displayItems = function(canvas) {
  canvas.clearRect(0,0,1200,1200)
  entities.forEach(function(item) {
    canvas.beginPath();
    canvas.arc(item.x, item.y, item.size, 0, 2 * Math.PI, false);
    canvas.fillStyle = item.color;
    canvas.fill();
  });
};

$(document).ready(function() {
  var canvas = drawCanvas();
  window.setInterval(function() {
    updateItems();
    displayItems(canvas);
  } ,1000/30);
});