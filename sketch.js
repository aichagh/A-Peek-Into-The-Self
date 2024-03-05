const w_num = 20; // number of windows to draw
const Y_AXIS = 1;
const X_AXIS = 2;

let table;
let windows = [];
let tenants = [];

function bg() {
  push();
  noStroke();
  let sky1 = color(143, 216, 247);
  let sky2 = color(88, 136, 214);
  setGradient(0, 0, width, height, sky2, sky1, Y_AXIS);
  fill(65, 117, 39);
  rect(0, height * (3/4), width, height * (1/4));
  fill(107, 29, 15);
  rect(((width / 2) - 210), 0, 445, height);
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
