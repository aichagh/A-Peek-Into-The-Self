let artists = new Set();
let allTracks = [];

function parseData() {

    for (let i = 0; i < table.getRowCount(); i++) {
      let r = table.getRow(i);

      let name = r.getString("Artist Name(s)");
      artists.add(name);

      let title = r.getString("Track Name");
      let key = r.getString("Key");
      let length = r.getString("Duration (ms)");

      allTracks.push(new Track(i, title, key, length));
    }
  
    // artists = new Set(allArtists);
    print(artists.size);

    debugTracks();
}

function debugTracks() {
    allTracks.forEach ((t) => (
        print(`${t.index}, ${t.title}, ${t.key}, ${t.length}`)
    ));
}