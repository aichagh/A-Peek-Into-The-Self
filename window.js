// the index allows to zoom in on a random window
// and randomly assign a tenant
class Window {
    constructor(t, i, x, y) {
        this.localTenants = t;
        this.currentTenant = t[0];

        this.index = i;
        this.x = x;
        this.y = y;

        this.currentTenant.updatePos(x + 37.5, y + 50);
    }

    changeTenant(t) {
        this.currentTenant = this.localTenants[round(Math.random() * (this.localTenants.length - 1))];
    }

    draw() {
        push();
        noStroke();
        fill('rgba(0%, 0%, 100%, 0.5)')
        rect(this.x, this.y, 75, 100);
        pop();

        this.currentTenant.draw();
    }
}

function createWindows(n) {
  let x = width / 2 - 175;
  let y = 75;
  let start = 0;
  const total = round(tenants.length / w_num);
  let end = total;

  for(let i = 1; i <= n; i++) {
    
    let localTemp = [];

    for(let j = start; j < end; j++) {
        localTemp.push(tenants[j]);
    }

    start += total;
    end += total;

    if(end > tenants.length) {end = tenants.length}

    let temp = new Window(localTemp, i, x, y);
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