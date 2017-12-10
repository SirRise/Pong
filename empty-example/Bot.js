function Bot() {

    this.x = width;
    this.y = height/2;
    this.h = height/5;
    this.w = 15;
    this.mov = 4;
    this.lo = this.y-this.h/2;
    this.hi = this.y+this.h/2;

    this.show = function() {
        fill(255);
        rect(width-this.w, this.y-this.h/2, this.w, this.h);
    }

    this.update = function(y) {
        if (y < this.y) {
            this.y -= this.mov;
        }
        else if (y > this.y) {
            this.y += this.mov;
        }
        this.lo = this.y-this.h/2;
        this.hi = this.y+this.h/2;9
    }

    this.reset = function() {
      this.y = height/2;
    }
}
