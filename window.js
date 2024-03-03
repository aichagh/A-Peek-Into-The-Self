// the index allows to zoom in on a random window
// and randomly assign a tenant
class Window {
    constructor(t, i, x, y) {
        this.currentTenant = t

        this.index = i;
        this.x = x;
        this.y = y;

        this.currentTenant.updatePos(this.x + 25, this.y + 25);
    }

    changeTenant(t) {
        this.currentTenant = t;
    }

    draw() {
        push();
        noStroke();
        rect(this.x, this.y, 50, 50);
        this.currentTenant.draw();
        pop();
    }
}

function createWindows(n) {
  let x = 250;
  let y = 50;

  for(let i = 1; i <= n; i++) {
    
    let t = tenants[round(Math.random(tenants.length))]
    let temp = new Window(t, i, x, y);
    windows.push(temp);

    if(i % 3 == 0) {
      x = 250;
      y += 100;
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