// the index allows to zoom in on a random window
// and randomly assign a tenant
class Window {
    constructor(t, i, x, y) {
        this.currentTenant = t

        this.index = i;
        this.x = x;
        this.y = y;

        this.currentTenant.updatePos(x + 37.5, y + 50);
    }

    changeTenant(t) {
        this.currentTenant = t;
    }

    draw() {
        push();
        noStroke();
        rect(this.x, this.y, 75, 100);
        pop();

        this.currentTenant.draw();
    }
}

function createWindows(n) {
  let x = width / 2 - 175;
  let y = 75;

  for(let i = 1; i <= n; i++) {
    
    let t = tenants[round(Math.random() * tenants.length)]
    let temp = new Window(t, i, x, y);
    windows.push(temp);

    if(i % 4 == 0) {
      x = width / 2 - 175;
      y += 125;
    } else {
      x += 100;
    }
  }
}

function drawWindows() {
  windows.forEach(w => {
    w.draw();
  });
}