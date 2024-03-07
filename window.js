// the index allows to zoom in on a random window
// and randomly assign a tenant
class Window {
    constructor(t, i, x, y) {
        this.localTenants = t;
        this.currentTenant = t[0];

        this.index = i;
        this.x = x;
        this.y = y;

        this.currentTenant.updatePos(x + 70, y + 50);

        this.changed = false;
        this.start = millis();
        this.wait = (round(Math.random() * 30) + 20) * 1000
    }

    changeTenant() {
      this.currentTenant.active = false;
      this.currentTenant = this.localTenants[round(Math.random() * (this.localTenants.length - 1))];
      
      this.start = millis();
      this.wait = (round(Math.random() * 30) + 20) * 1000;
      
      this.currentTenant.active = false;
      this.currentTenant.updatePos(this.x + 37.5, this.y + 50);
    }

    draw() {
        this.currentTenant.draw();

        push();
        noStroke();
        if(this.currentTenant.active) {
          fill(this.currentTenant.color);
          this.currentTenant.update();
          this.changed = false;
          this.start = millis();
          
        } else if((millis() - this.start) >= this.wait){
          this.currentTenant.active = true;
          fill(0);
          this.changed = false;
          
        } else if(!this.changed){
          this.changeTenant();
          this.changed = true;
          fill(0);

        } else {
          this.currentTenant.updatePos(this.x + 70, this.y + 50);
          fill(0);
        }

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