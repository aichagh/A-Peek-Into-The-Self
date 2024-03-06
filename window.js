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

        this.changed = false;
    }

    changeTenant() {
      this.currentTenant.active = false;
      this.currentTenant = this.localTenants[round(Math.random() * (this.localTenants.length - 1))];
      this.currentTenant.active = true;
      this.currentTenant.updatePos(this.x + 37.5, this.y + 50);
    }

    draw() {
        this.currentTenant.draw();

        push();
        noStroke();
        if(this.currentTenant.active) {
          fill(this.currentTenant.color);
        } else {
          this.changeTenant();
          fill (0);
        }

        this.currentTenant.update();

        rect(this.x, this.y, 75, 100);
        pop();
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