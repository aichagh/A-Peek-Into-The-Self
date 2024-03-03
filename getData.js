let artists = new Set();
let allTracks = [];

function parseData() {

    print("starting data parsing");

    for (let i = 0; i < table.getRowCount(); i++) {
      let r = table.getRow(i);

      let name = r.getString("Artist Name(s)");
      let key = r.getString("Key");
      let mode = r.getString("Mode");
      let energy = r.getString("Energy");
      let length = r.getString("Duration (ms)");
      
      artists.add(name);

      let temp = new Tenant(new Track(i, key, mode, energy, length), 0, 0);
      tenants.push(temp);

      print("added track");
    }

    // print(`Number of unique artists: ${artists.size}`); // 388
    // debugTracks();
}

function debugTracks() {
    allTracks.forEach ((t) => (
        print(`${t.index}, ${t.key}, ${t.mode}, ${t.energy}, ${t.length}`)
    ))
}