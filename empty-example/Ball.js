function Ball() {

    this.x = width/2;
    this.y = height/2;
    this.s = 15;
    this.hv = -6;
    this.vv = random(-6, 6);
    this.lit = 2;

    this.show = function() {
        noStroke();
        fill(100, 0, 100);
        ellipse(this.x, this.y, this.s, this.s);
    }

    this.update = function() {
        this.x += this.hv;
        this.y += this.vv;

        if (this.y < 0 || this.y > height) {
            this.vv = -this.vv;
        }
    }

    this.reset = function() {
      this.x = width/2;
      this.y = height/2;
      this.hv = -4;
      this.vv = 4;
    }
}
