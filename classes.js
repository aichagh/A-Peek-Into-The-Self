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
    constructor(track) {
        this.track = track;

        this.x = 0;
        this.y = 0;
    }

    updatePos(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        push();
        color(0);
        circle(this.x, this.y, 50); // placeholder
        pop();
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

