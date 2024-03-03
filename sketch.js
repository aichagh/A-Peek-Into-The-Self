const w_num = 20; // number of windows to draw

let table;
let windows = [];
let tenants = [];

function bg() {
  push();
  noStroke();
  sky = color(143, 216, 247);
  background(sky);
  fill(65, 117, 39);
  rect(0, height * (3/4), width, height * (1/4));
}

function preload() {
  let playlist = "assets/a2_playlist.csv";

  table = loadTable(playlist, "csv", "header", function () {
    print("loaded");
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  parseData();
  createWindows(w_num);
}

function draw() {
  bg();
  drawWindows();
}
