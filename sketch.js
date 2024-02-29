let table;
var move;

function preload() {
  let playlist = "assets/a2_playlist.csv";

  table = loadTable(playlist, "csv", "header", function () {
    print("loaded");
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  parseData();

  move = {
    x: 100,
    y: width / 2
  }

  gsap.to(move, {
    x: width - 100,
    y: height / 2,
    duration: 2,
    ease: "expo.inOut",
  });
}

function draw() {
  background(220);
  circle(move.x, move.y, 50);
}
