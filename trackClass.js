class Track {
    constructor(index, key, mode, energy, length) {
        this.index = index;
        this.key = key; // 0 - 11
        this.mode = mode; // 0 or 1
        this.energy = energy; // 0 - 1
        this.length = length; // in ms
    }
}

class Tenant {
    constructor(track, x, y) {
        this.track = track;
        this.init_x = x;
        this.init_y = y;
    }
}