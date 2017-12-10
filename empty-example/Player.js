function Player() {

    this.x = 0;
    this.y = height/2;
    this.h = height/5;
    this.w = 15;
    this.mov = 0;
    this.lo = this.y-this.h/2;
    this.hi = this.y+this.h/2;

    this.show = function() {
        fill(255);
        rect(0, this.y-this.h/2, this.w, this.h);
    }

    this.update = function() {
        this.y += this.mov;
        this.lo = this.y-this.h/2;
        this.hi = this.y+this.h/2;
    }

    this.reset = function() {
      this.y = height/2;
      this.mov = 0;
    }
}
