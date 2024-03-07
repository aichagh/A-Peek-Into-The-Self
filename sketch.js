const w_num = 20; // number of windows to draw

var x1 = 0;
var x2;

let timeStart;
let night = false;

var scrollSpeed = 0.5;
// const Y_AXIS = 1;
// const X_AXIS = 2;

let table;
let windows = [];
let tenants = [];
let sky, skyDay, skyNight, clouds, building, curtain;
let bgs = [];

function preload() {
  let playlist = "assets/a2_playlist.csv";

  table = loadTable(playlist, "csv", "header", function () {
    print("loaded");
  });

  skyDay = loadImage("./assets/Sky.png");
  skyNight = loadImage("./assets/SkyNight.png")
  clouds = loadImage("./assets/Clouds.png");
  building = loadImage("./assets/Building.png");

  for(let i = 1; i < 10; i++) {
    bgs.push(loadImage(`./assets/BG${i}.png`));
  }

  curtain = loadImage("./assets/Curtain.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x2 = width;

  parseData();
  createWindows(w_num);

  timeStart = millis();
  sky = skyDay
  noCursor();
}

function draw() {
  // if(millis() - timeStart >= 300000) {
  //   if(night) {
  //     sky = skyDay;
  //     night = false;
  //     timeStart = millis();
  //   } else {
  //     sky = skyNight;
  //     night = true;
  //     timeStart = millis();
  //   }
  // }

  image(sky, 0, 0, width, height);

  // ++++++++++++++++++++++++++++++++++
  // the scrolling logic is taken from :
  // https://editor.p5js.org/chjno/sketches/ByZlypKWM

  image(clouds, x1, 0, width, height);
  image(clouds, x2, 0, width, height);
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }

  // ++++++++++++++++++++++++++++++++++

  fill(255, 170, 150);
  rect(width / 2 - 210, 0, 445, height)

  drawWindows();
  image(building, 0, 0, width, height);
}
