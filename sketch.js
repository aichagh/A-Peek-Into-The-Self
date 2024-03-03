const w_num = 20; // number of windows to draw

let table;
let windows = [];
let tenants = [];

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
  background(220);
  drawWindows();
}
