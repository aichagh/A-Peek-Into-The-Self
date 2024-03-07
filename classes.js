// associates a color to each key
function colorFromKey(k) {
    switch (k) {
        case 0:
            return color('rgba(0%, 50%, 90%, 0.3)');
        case 1:
            return color('rgba(2%, 0%, 90%, 0.3)');
        case 2:
            return color('rgba(60%, 0%, 90%, 0.3)');
        case 3:
            return color('rgba(90%, 0%, 75%, 0.3)');
        case 4:
            return color('rgba(90%, 0%, 20%, 0.3)');
        case 5:
            return color('rgba(90%, 0%, 0%, 0.3)');
        case 6:
            return color('rgba(90%, 40%, 0%, 0.3)');
        case 7:
            return color('rgba(90%, 66%, 0%, 0.3)');
        case 8:
            return color('rgba(90%, 85%, 0%, 0.3)');
        case 9:
            return color('rgba(66%, 90%, 0%, 0.3)');
        case 10:
            return color('rgba(15%, 90%, 0%, 0.3)');
        case 11:
            return color('rgba(0%, 90%, 60%, 0.3)');
        default:
            return color(0);
    }
}

let dur = [];

class Track {
    constructor(index, key, mode, energy, length) {
        this.index = index;
        this.key = round(key); // 0 - 11
        this.mode = round(mode); // 0 or 1
        this.energy = round(map(energy, 0, 1, 1, 5, true)); // 0 - 1
        this.length = round(map(length, 56000, 1039653, 10, 20, true));
    }
}

class Tenant {
    constructor(track) {
        this.track = track;

        this.x = 0;
        this.y = 0;
        this.specX = 0;
        this.specY = 0;

        this.color = colorFromKey(this.track.key);
        this.active = false;
        this.playing = false;
    }

    updatePos(x, y) {
        this.x = x;
        this.y = y;
        // this.specX = x + 20;
        // this.specY = y + 30;
    }

    draw() {
        push();
        noStroke();
        fill(0);
        circle(this.x, this.y, 20);
        circle(this.x, this.y + 30, 40)
        rect(this.x - 20, this.y + 30, 40, 25);
        // rect(this.specX, this.specY, 10, 50);
        pop();
    }

    update() {

            gsap.to(this, {
                // x: -0.25,
                duration: this.track.length,
                ease: "elastic.out(1, 0.1, 3)",
            
                onComplete: () => {
                    this.active = false;
                    // tl.kill();
                }
            })
    }
}

