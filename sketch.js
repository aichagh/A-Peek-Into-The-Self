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
}

function draw() {
  background(220);
}
