let table;

function preload() {
  let playlist = "assets/a2_playlist.csv";

  table = loadTable(playlist, "csv", "header", function () {
    print("loaded");
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // debug();
  parseData();
}

function draw() {
  background(220);
}


function debug() {
  table.columns.forEach((c) => {
    print(`${c}: ${typeof c}`);
  });

  for (let i = 0; i < table.getRowCount(); i++) {
    let r = table.getRow(i);
    let s = r.getString("Artist Name(s)");
    print(`${i} ${s}`);
  }
}
