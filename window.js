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
      this.currentTenant.active = false;
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

        fill(232, 222, 202);
        stroke(232, 222, 202);
        strokeWeight(2.5);
        line(this.x, this.y, this.x + 75, this.y);
        line(this.x + 75, this.y, this.x + 75, this.y + 100);
        line(this.x, this.y + 100, this.x + 75, this.y + 100);
        line(this.x, this.y, this.x, this.y + 100);
        line(this.x + 37.5, this.y, this.x + 37.5, this.y + 100);
        line(this.x, this.y + 47.5, this.x + 75, this.y + 47.5);

        noStroke();
        rect(((width / 2) - 230), 0, 485, 40);

        fill(207, 200, 186);
        rect(((width / 2) - 220), 40, 465, 10);

        fill(82, 21, 11);
        rect(((width / 2) - 210), 50, 445, 5);

        stroke(82, 21, 11);
        fill(82, 21, 11);
        strokeWeight(3.5);
        line(this.x, this.y + 102.5, this.x + 75, this.y + 102.5)

        noStroke();

        fill(107, 29, 15);
        rect(((width / 2) - 210), 175 + 3.5, 445, 25 - 3.5);
        rect(((width / 2) - 210), 300 + 3.5, 445, 25 - 3.5);
        rect(((width / 2) - 210), 425 + 3.5, 445, 25 - 3.5);
        rect(((width / 2) - 210), 550 + 3.5, 445, 25 - 3.5);
        rect(((width / 2) - 210), 675 + 3.5, 445, 100);
        
        fill(64, 16, 8);
        rect(width / 2 - 35, height - 110, 100, 125 )

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