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

        this.x = x;
        this.y = y;
    }

    draw() {
        circle(0,0,0) // placeholder
    }

    update() {
        gsap.to(this, {
            x: a,
            y: b,

            duration:5,
            ease: CustomWiggle.create("custom", {
            wiggles:7,
            type:easeInOut
            }),
            y: -250
        });
    }
}

// the index allows to zoom in on a random window
// and randomly assign a tenant
class Window {
    constructor(i) {
        this.currentTenant;
        this.index = i;
    }

    changeTenant(t) {
        this.currentTenant = t;
    }
}
