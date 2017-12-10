function setup() {
    frameRate(30);
    createCanvas(667, 500);
    player = new Player();
    bot = new Bot();
    ball = new Ball();
    pp = 0;
    bp = 0;
    $('#pp').text("Player: " + pp);
    $('#bp').text("Bot: " + bp);
}

function draw() {
    background(0);
    update();
    if (ball.x <= player.w && ball.y <= player.hi && ball.y >= player.lo) {
      if (ball.hv < 0) ball.hv--;
      else if (ball.hv > 0) ball.hv++;
      ball.x = player.w+1;
      ball.hv = -ball.hv;
      ball.vv += random(ball.lit);
    } else if (ball.x >= width-bot.w && ball.y <= bot.hi && ball.y >= bot.lo) {
      if (ball.hv < 0) ball.hv--;
      else if (ball.hv > 0) ball.hv++;
      ball.x = (width-bot.w)-1;
      ball.hv = -ball.hv;
      ball.vv += random(ball.lit);
    } else if (ball.x >= width) {
      pp++;
      reset();
    } else if (ball.x <= 0) {
      bp++;
      reset();
    }
}

function update() {
    ball.update();
    ball.show();
    player.update();
    player.show();
    bot.update(ball.y);
    bot.show();
}

function keyPressed() {
    if (keyCode == 38) {
        player.mov = -3;
    } else if (keyCode == 40) {
        player.mov = 3;
    }
}

function reset() {
  player.reset();
  bot.reset();
  ball.reset();
  $('#pp').text("Player: " + pp);
  $('#bp').text("Bot: " + bp);
}
