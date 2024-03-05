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
        this.mode = mode; // 0 or 1
        this.energy = energy * 10; // 0 - 1
        this.length = round(map(length, 56000, 1039653, 3, 7, true)) * 3;
    }
}

class Tenant {
    constructor(track) {
        this.track = track;

        this.x = 0;
        this.y = 0;

        this.color = colorFromKey(this.track.key);
        this.active = false;
    }

    updatePos(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        push();
        noStroke();
        fill(0);
        circle(this.x, this.y, 20); // placeholder
        circle(this.x, this.y + 30, 40)
        rect(this.x - 20, this.y + 30, 40, 25)
        pop();
    }

    update() {

        gsap.to(this, {
            x: this.x,
            y: this.y,

            duration: Math.random() * 30 + 20,

            onComplete: () => {
                this.active = true;
            }
        });

        gsap.to(this, {
            // x: this.x + this.track.energy,    
            duration: this.track.length,
            ease: "sine.out",
            y: this.y + 5,

            onComplete: () => {
                this.active = false;
            }
        });
    
    }
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
      noStroke();

    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
      noStroke();
    }
  }