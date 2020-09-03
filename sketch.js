var paddle;
var ball, ballImg;
var w1, w2, w3;
var backImg;
var score = 0;
var level = 1;
var counter = 0;
var lives = 2;
var gameOver, gameOverImg;
var blockHit;

function preload() {
  backImg = loadImage("background.jpg");

  ballImg = loadImage('ball.png');

  PImg = loadImage("pink.png");
  YImg = loadImage("yellow.png")
  LGImg = loadImage("lgreen.png")
  LBImg = loadImage("LBlue.png")
  DGImg = loadImage("dgreen.png")
  DBImg = loadImage("Darkblue.png")
  OImg = loadImage("orange.png")
  RImg = loadImage("red.png")
  BRImg = loadImage("brown.png")
  BLImg = loadImage("black.png")
 
  bImg = loadImage("3.png");

  darkImg = loadImage("1.png");

  liveImg = loadImage("life.png");

  gameOverImg = loadImage('gameOver.png');

  blockHit = loadSound('block_hit.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  w1 = createSprite(-15, displayHeight/2, 30, displayHeight);

  w2 = createSprite(displayWidth/2, -15, displayWidth, 30);

  w3 = createSprite(displayWidth+15, displayHeight/2, 30, displayHeight);

  w4 = createSprite(displayWidth+14, displayHeight-150, 30, displayHeight/3+50);
  w4.visible = false;


  paddle = createSprite(displayWidth/2, displayHeight-5, 100, 20);
  paddle.shapeColor = '#F39C12';
  

  //Create the Blocks
  ba1 = createSprite(120, 80, 100, 50);
  ba1.addImage(PImg);
  ba2 = createSprite(177, 80, 100, 50);
  ba2.addImage(YImg);
  ba3 = createSprite(234, 80, 100, 50);
  ba3.addImage(PImg);
  ba4 = createSprite(291, 80, 100, 50);
  ba4.addImage(RImg);
  ba5 = createSprite(348, 80, 100, 50);
  ba5.addImage('darkImg', darkImg);
  ba5.addImage('bImg', bImg);
  ba5g = 0;
  ba6 = createSprite(405, 80, 100, 50);
  ba6.addImage('darkImg', darkImg);
  ba6.addImage('bImg', bImg);
  ba6g = 0;
  ba7 = createSprite(462, 80, 100, 50);
  ba7.addImage(OImg);
  ba8 = createSprite(519, 80, 100, 50);
  ba8.addImage(LGImg);
  ba9 = createSprite(576, 80, 100, 50);
  ba9.addImage(RImg);
  ba10 = createSprite(633, 80, 100, 50);
  ba10.addImage('darkImg', darkImg);
  ba10.addImage('bImg', bImg);
  ba10g = 0;
  ba11 = createSprite(690, 80, 100, 50);
  ba11.addImage('darkImg', darkImg);
  ba11.addImage('bImg', bImg);
  ba11g = 0;
  ba12 = createSprite(747, 80, 100, 50);
  ba12.addImage(LGImg);
  ba13 = createSprite(804, 80, 100, 50);
  ba13.addImage(OImg);
  ba14 = createSprite(861, 80, 100, 50);
  ba14.addImage(PImg);
  ba15 = createSprite(918, 80, 100, 50);
  ba15.addImage(BRImg);


  bb1 = createSprite(120, 137, 100, 50);
  bb1.addImage(LGImg);
  bb2 = createSprite(177, 137, 100, 50);
  bb2.addImage(DGImg);
  bb3 = createSprite(234, 137, 100, 50);
  bb3.addImage(OImg);
  bb4 = createSprite(291, 137, 100, 50);
  bb4.addImage(LGImg);
  bb5 = createSprite(348, 137, 100, 50);
  bb5.addImage('darkImg', darkImg);
  bb5.addImage('bImg', bImg);
  bb5g = 0;
  bb6 = createSprite(405, 137, 100, 50);
  bb6.addImage('darkImg', darkImg);
  bb6.addImage('bImg', bImg);
  bb6g = 0;
  bb7 = createSprite(462, 137, 100, 50);
  bb7.addImage(PImg);
  bb8 = createSprite(519, 137, 100, 50);
  bb8.addImage(BRImg);
  bb9 = createSprite(576, 137, 100, 50);
  bb9.addImage(LBImg);
  bb10 = createSprite(633, 137, 100, 50);
  bb10.addImage('darkImg', darkImg);
  bb10.addImage('bImg', bImg);
  bb10g = 0;
  bb11 = createSprite(690, 137, 100, 50);
  bb11.addImage('darkImg', darkImg);
  bb11.addImage('bImg', bImg);
  bb11g = 0;
  bb12 = createSprite(747, 137, 100, 50);
  bb12.addImage(DBImg);
  bb13 = createSprite(804, 137, 100, 50);
  bb13.addImage(YImg);
  bb14 = createSprite(861, 137, 100, 50);
  bb14.addImage(RImg);
  bb15 = createSprite(918, 137, 100, 50);
  bb15.addImage(YImg);


  bc1 = createSprite(120, 194, 100, 50);
  bc1.addImage(YImg);
  bc2 = createSprite(177, 194, 100, 50);
  bc2.addImage(BRImg);
  bc3 = createSprite(234, 194, 100, 50);
  bc3.addImage(DBImg);
  bc4 = createSprite(291, 194, 100, 50);
  bc4.addImage(YImg);
  bc5 = createSprite(348, 194, 100, 50);
  bc5.addImage('darkImg', darkImg);
  bc5.addImage('bImg', bImg);
  bc5g = 0;
  bc6 = createSprite(405, 194, 100, 50);
  bc6.addImage('darkImg', darkImg);
  bc6.addImage('bImg', bImg);
  bc6g = 0;
  bc7 = createSprite(462, 194, 100, 50);
  bc7.addImage(DBImg);
  bc8 = createSprite(519, 194, 100, 50);
  bc8.addImage(YImg);
  bc9 = createSprite(576, 194, 100, 50);
  bc9.addImage(OImg);
  bc10 = createSprite(633, 194, 100, 50);
  bc10.addImage('darkImg', darkImg);
  bc10.addImage('bImg', bImg);
  bc10g = 0;
  bc11 = createSprite(690, 194, 100, 50);
  bc11.addImage('darkImg', darkImg);
  bc11.addImage('bImg', bImg);
  bc11g = 0;
  bc12 = createSprite(747, 194, 100, 50);
  bc12.addImage(BRImg);
  bc13 = createSprite(804, 194, 100, 50);
  bc13.addImage(DGImg);
  bc14 = createSprite(861, 194, 100, 50);
  bc14.addImage(LBImg);
  bc15 = createSprite(918, 194, 100, 50);
  bc15.addImage(BLImg);


  bd1 = createSprite(120, 251, 100, 50);
  bd1.addImage(OImg);
  bd2 = createSprite(177, 251, 100, 50);
  bd2.addImage(RImg);
  bd3 = createSprite(234, 251, 100, 50);
  bd3.addImage(PImg);
  bd4 = createSprite(291, 251, 100, 50);
  bd4.addImage(LBImg);
  bd5 = createSprite(348, 251, 100, 50);
  bd5.addImage('darkImg', darkImg);
  bd5.addImage('bImg', bImg);
  bd5g = 0;
  bd6 = createSprite(405, 251, 100, 50);
  bd6.addImage('darkImg', darkImg);
  bd6.addImage('bImg', bImg);
  bd6g = 0;
  bd7 = createSprite(462, 251, 100, 50);
  bd7.addImage(BLImg);
  bd8 = createSprite(519, 251, 100, 50);
  bd8.addImage(DGImg);
  bd9 = createSprite(576, 251, 100, 50);
  bd9.addImage(PImg);
  bd10 = createSprite(633, 251, 100, 50);
  bd10.addImage('darkImg', darkImg);
  bd10.addImage('bImg', bImg);
  bd10g = 0;
  bd11 = createSprite(690, 251, 100, 50);
  bd11.addImage('darkImg', darkImg);
  bd11.addImage('bImg', bImg);
  bd11g = 0;
  bd12 = createSprite(747, 251, 100, 50);
  bd12.addImage(RImg);
  bd13 = createSprite(804, 251, 100, 50);
  bd13.addImage(YImg);
  bd14 = createSprite(861, 251, 100, 50);
  bd14.addImage(LGImg);
  bd15 = createSprite(918, 251, 100, 50);
  bd15.addImage(PImg);


  be1 = createSprite(120, 308, 100, 50);
  be1.addImage('darkImg', darkImg);
  be1.addImage('bImg', bImg);
  be1g = 0;
  be2 = createSprite(177, 308, 100, 50);
  be2.addImage('darkImg', darkImg);
  be2.addImage('bImg', bImg);
  be2g = 0;
  be3 = createSprite(234, 308, 100, 50);
  be3.addImage('darkImg', darkImg);
  be3.addImage('bImg', bImg);
  be3g = 0;
  be4 = createSprite(291, 308, 100, 50);
  be4.addImage('darkImg', darkImg);
  be4.addImage('bImg', bImg);
  be4g = 0;
  be5 = createSprite(348, 308, 100, 50);
  be5.addImage('darkImg', darkImg);
  be5.addImage('bImg', bImg);
  be5g = 0;
  be6 = createSprite(405, 308, 100, 50);
  be6.addImage('darkImg', darkImg);
  be6.addImage('bImg', bImg);
  be6g = 0;
  be7 = createSprite(462, 308, 100, 50);
  be7.addImage('darkImg', darkImg);
  be7.addImage('bImg', bImg);
  be7g = 0;
  be8 = createSprite(519, 308, 100, 50);
  be8.addImage('darkImg', darkImg);
  be8.addImage('bImg', bImg);
  be8g = 0;
  be9 = createSprite(576, 308, 100, 50);
  be9.addImage('darkImg', darkImg);
  be9.addImage('bImg', bImg);
  be9g = 0;
  be10 = createSprite(633, 308, 100, 50);
  be10.addImage('darkImg', darkImg);
  be10.addImage('bImg', bImg);
  b10g = 0;
  be11 = createSprite(690, 308, 100, 50);
  be11.addImage('darkImg', darkImg);
  be11.addImage('bImg', bImg);
  be11g = 0;
  be12 = createSprite(747, 308, 100, 50);
  be12.addImage('darkImg', darkImg);
  be12.addImage('bImg', bImg);
  be12g = 0;
  be13 = createSprite(804, 308, 100, 50);
  be13.addImage('darkImg', darkImg);
  be13.addImage('bImg', bImg);
  be13g = 0;
  be14 = createSprite(861, 308, 100, 50);
  be14.addImage('darkImg', darkImg);
  be14.addImage('bImg', bImg);
  be14g = 0;
  be15 = createSprite(918, 308, 100, 50);
  be15.addImage('darkImg', darkImg);
  be15.addImage('bImg', bImg);
  be15g = 0;


  bf1 = createSprite(120, 365, 100, 50);
  bf1.addImage('darkImg', darkImg);
  bf1.addImage('bImg', bImg);
  bf1g = 0;
  bf2 = createSprite(177, 365, 100, 50);
  bf2.addImage('darkImg', darkImg);
  bf2.addImage('bImg', bImg);
  bf2g = 0;
  bf3 = createSprite(234, 365, 100, 50);
  bf3.addImage('darkImg', darkImg);
  bf3.addImage('bImg', bImg);
  bf3g = 0;
  bf4 = createSprite(291, 365, 100, 50);
  bf4.addImage('darkImg', darkImg);
  bf4.addImage('bImg', bImg);
  bf4g = 0;
  bf5 = createSprite(348, 365, 100, 50);
  bf5.addImage('darkImg', darkImg);
  bf5.addImage('bImg', bImg);
  bf5g = 0;
  bf6 = createSprite(405, 365, 100, 50);
  bf6.addImage('darkImg', darkImg);
  bf6.addImage('bImg', bImg);
  bf6g = 0;
  bf7 = createSprite(462, 365, 100, 50);
  bf7.addImage('darkImg', darkImg);
  bf7.addImage('bImg', bImg);
  bf7g = 0;
  bf8 = createSprite(519, 365, 100, 50);
  bf8.addImage('darkImg', darkImg);
  bf8.addImage('bImg', bImg);
  bf8g = 0;
  bf9 = createSprite(576, 365, 100, 50);
  bf9.addImage('darkImg', darkImg);
  bf9.addImage('bImg', bImg);
  bf9g = 0;
  bf10 = createSprite(633, 365, 100, 50);
  bf10.addImage('darkImg', darkImg);
  bf10.addImage('bImg', bImg);
  bf10g = 0;
  bf11 = createSprite(690, 365, 100, 50);
  bf11.addImage('darkImg', darkImg);
  bf11.addImage('bImg', bImg);
  bf11g = 0;
  bf12 = createSprite(747, 365, 100, 50);
  bf12.addImage('darkImg', darkImg);
  bf12.addImage('bImg', bImg);
  bf12g = 0;
  bf13 = createSprite(804, 365, 100, 50);
  bf13.addImage('darkImg', darkImg);
  bf13.addImage('bImg', bImg);
  bf13g = 0;
  bf14 = createSprite(861, 365, 100, 50);
  bf14.addImage('darkImg', darkImg);
  bf14.addImage('bImg', bImg);
  bf14g = 0;
  bf15 = createSprite(918, 365, 100, 50);
  bf15.addImage('darkImg', darkImg);
  bf15.addImage('bImg', bImg);
  bf15g = 0;


  bg1 = createSprite(120, 422, 100, 50);
  bg1.addImage(OImg);
  bg2 = createSprite(177, 422, 100, 50);
  bg2.addImage(LBImg);
  bg3 = createSprite(234, 422, 100, 50);
  bg3.addImage(DGImg);
  bg4 = createSprite(291, 422, 100, 50);
  bg4.addImage(PImg);
  bg5 = createSprite(348, 422, 100, 50);
  bg5.addImage('darkImg', darkImg);
  bg5.addImage('bImg', bImg);
  bg5g = 0;
  bg6 = createSprite(405, 422, 100, 50);
  bg6.addImage('darkImg', darkImg);
  bg6.addImage('bImg', bImg);
  bg6g = 0;
  bg7 = createSprite(462, 422, 100, 50);
  bg7.addImage(OImg);
  bg8 = createSprite(519, 422, 100, 50);
  bg8.addImage(YImg);
  bg9 = createSprite(576, 422, 100, 50);
  bg9.addImage(PImg);
  bg10 = createSprite(633, 422, 100, 50);
  bg10.addImage('darkImg', darkImg);
  bg10.addImage('bImg', bImg);
  bg10g = 0;
  bg11 = createSprite(690, 422, 100, 50);
  bg11.addImage('darkImg', darkImg);
  bg11.addImage('bImg', bImg);
  bg11g = 0;
  bg12 = createSprite(747, 422, 100, 50);
  bg12.addImage(YImg);
  bg13 = createSprite(804, 422, 100, 50);
  bg13.addImage(RImg);
  bg14 = createSprite(861, 422, 100, 50);
  bg14.addImage(LBImg);
  bg15 = createSprite(918, 422, 100, 50);
  bg15.addImage(BRImg);


  bh1 = createSprite(120, 479, 100, 50);
  bh1.addImage(YImg);
  bh2 = createSprite(177, 479, 100, 50);
  bh2.addImage(BRImg);
  bh3 = createSprite(234, 479, 100, 50);
  bh3.addImage(RImg);
  bh4 = createSprite(291, 479, 100, 50);
  bh4.addImage(LGImg);
  bh5 = createSprite(348, 479, 100, 50);
  bh5.addImage('darkImg', darkImg);
  bh5.addImage('bImg', bImg);
  bh5g = 0;
  bh6 = createSprite(405, 479, 100, 50);
  bh6.addImage('darkImg', darkImg);
  bh6.addImage('bImg', bImg);
  bh6g = 0;
  bh7 = createSprite(462, 479, 100, 50);
  bh7.addImage(LGImg);
  bh8 = createSprite(519, 479, 100, 50);
  bh8.addImage(RImg);
  bh9 = createSprite(576, 479, 100, 50);
  bh9.addImage(BRImg);
  bh10 = createSprite(633, 479, 100, 50);
  bh10.addImage('darkImg', darkImg);
  bh10.addImage('bImg', bImg);
  bh10g = 0;
  bh11 = createSprite(690, 479, 100, 50);
  bh11.addImage('darkImg', darkImg);
  bh11.addImage('bImg', bImg);
  bh11g = 0;
  bh12 = createSprite(747, 479, 100, 50);
  bh12.addImage(DBImg);
  bh13 = createSprite(804, 479, 100, 50);
  bh13.addImage(LGImg);
  bh14 = createSprite(861, 479, 100, 50);
  bh14.addImage(OImg);
  bh15 = createSprite(918, 479, 100, 50);
  bh15.addImage(YImg);


  bi1 = createSprite(120, 536, 100, 50);
  bi1.addImage(DBImg);
  bi2 = createSprite(177, 536, 100, 50);
  bi2.addImage(PImg);
  bi3 = createSprite(234, 536, 100, 50);
  bi3.addImage(OImg);
  bi4 = createSprite(291, 536, 100, 50);
  bi4.addImage(BLImg);
  bi5 = createSprite(348, 536, 100, 50);
  bi5.addImage('darkImg', darkImg);
  bi5.addImage('bImg', bImg);
  bi5g = 0;
  bi6 = createSprite(405, 536, 100, 50);
  bi6.addImage('darkImg', darkImg);
  bi6.addImage('bImg', bImg);
  bi6g = 0;
  bi7 = createSprite(462, 536, 100, 50);
  bi7.addImage(DGImg);
  bi8 = createSprite(519, 536, 100, 50);
  bi8.addImage(LBImg);
  bi9 = createSprite(576, 536, 100, 50);
  bi9.addImage(OImg);
  bi10 = createSprite(633, 536, 100, 50);
  bi10.addImage('darkImg', darkImg);
  bi10.addImage('bImg', bImg);
  bi10g = 0;
  bi11 = createSprite(690, 536, 100, 50);
  bi11.addImage('darkImg', darkImg);
  bi11.addImage('bImg', bImg);
  bi11g = 0;
  bi12 = createSprite(747, 536, 100, 50);
  bi12.addImage(LBImg);
  bi13 = createSprite(804, 536, 100, 50);
  bi13.addImage(BRImg);
  bi14 = createSprite(861, 536, 100, 50);
  bi14.addImage(PImg);
  bi15 = createSprite(918, 536, 100, 50);
  bi15.addImage(DGImg);


  bj1 = createSprite(120, 593, 100, 50);
  bj1.addImage(LGImg);
  bj2 = createSprite(177, 593, 100, 50);
  bj2.addImage(RImg);
  bj3 = createSprite(234, 593, 100, 50);
  bj3.addImage(YImg);
  bj4 = createSprite(291, 593, 100, 50);
  bj4.addImage(LBImg);
  bj5 = createSprite(348, 593, 100, 50);
  bj5.addImage(darkImg);
  bj5g = 0;
  bj6 = createSprite(405, 593, 100, 50);
  bj6.addImage(darkImg);
  bj6g = 0;
  bj7 = createSprite(462, 593, 100, 50);
  bj7.addImage(PImg);
  bj8 = createSprite(519, 593, 100, 50);
  bj8.addImage(DBImg);
  bj9 = createSprite(576, 593, 100, 50);
  bj9.addImage(YImg);
  bj10 = createSprite(633, 593, 100, 50);
  bj10.addImage(darkImg);
  bj10g = 0;
  bj11 = createSprite(690, 593, 100, 50);
  bj11.addImage(darkImg);
  bj11g = 0;
  bj12 = createSprite(747, 593, 100, 50);
  bj12.addImage(RImg);
  bj13 = createSprite(804, 593, 100, 50);
  bj13.addImage(YImg);
  bj14 = createSprite(861, 593, 100, 50);
  bj14.addImage(DBImg);
  bj15 = createSprite(918, 593, 100, 50);
  bj15.addImage(LGImg);




  ca1 = createSprite(120, 422, 100, 50);
  ca1.addImage(darkImg);
  ca1.visible = false;
  ca2 = createSprite(177, 422, 100, 50);
  ca2.addImage(darkImg);
  ca2.visible = false;
  ca3 = createSprite(234, 422, 100, 50);
  ca3.addImage(darkImg);
  ca3.visible = false;
  ca4 = createSprite(291, 422, 100, 50);
  ca4.addImage(darkImg);
  ca4.visible = false;
  ca5 = createSprite(348, 422, 100, 50);
  ca5.addImage(darkImg);
  ca5g = 0;
  ca5.visible = false;
  ca6 = createSprite(405, 422, 100, 50);
  ca6.addImage(darkImg);
  ca6g = 0;
  ca6.visible = false;
  ca7 = createSprite(462, 422, 100, 50);
  ca7.addImage(darkImg);
  ca7.visible = false;
  ca8 = createSprite(519, 422, 100, 50);
  ca8.addImage(darkImg);
  ca8.visible = false;
  ca9 = createSprite(576, 422, 100, 50);
  ca9.addImage(darkImg);
  ca9.visible = false;
  ca10 = createSprite(633, 422, 100, 50);
  ca10.addImage(darkImg);
  ca10g = 0;
  ca10.visible = false;
  ca11 = createSprite(690, 422, 100, 50);
  ca11.addImage(darkImg);
  ca11g = 0;
  ca11.visible = false;
  ca12 = createSprite(747, 422, 100, 50);
  ca12.addImage(darkImg);
  ca12.visible = false;
  ca13 = createSprite(804, 422, 100, 50);
  ca13.addImage(darkImg);
  ca13.visible = false;
  ca14 = createSprite(861, 422, 100, 50);
  ca14.addImage(darkImg);
  ca14.visible = false;
  ca15 = createSprite(918, 422, 100, 50);
  ca15.addImage(darkImg);
  ca15.visible = false;

  cb0 = createSprite(63, 479, 100, 50);
  cb0.addImage(darkImg);
  cb0.visible = false;
  cb1 = createSprite(120, 479, 100, 50);
  cb1.addImage(darkImg);
  cb1.visible = false;
  cb2 = createSprite(177, 479, 100, 50);
  cb2.addImage(darkImg);
  cb2.visible = false;
  cb3 = createSprite(234, 479, 100, 50);
  cb3.addImage(darkImg);
  cb3.visible = false;
  cb4 = createSprite(291, 479, 100, 50);
  cb4.addImage(darkImg);
  cb4.visible = false;
  cb5 = createSprite(348, 479, 100, 50);
  cb5.addImage(darkImg);
  cb5g = 0;
  cb5.visible = false;
  cb6 = createSprite(405, 479, 100, 50);
  cb6.addImage(darkImg);
  cb6g = 0;
  cb6.visible = false;
  cb7 = createSprite(462, 479, 100, 50);
  cb7.addImage(darkImg);
  cb7.visible = false;
  cb8 = createSprite(519, 479, 100, 50);
  cb8.addImage(darkImg);
  cb8.visible = false;
  cb9 = createSprite(576, 479, 100, 50);
  cb9.addImage(darkImg);
  cb9.visible = false;
  cb10 = createSprite(633, 479, 100, 50);
  cb10.addImage(darkImg);
  cb10g = 0;
  cb10.visible = false;
  cb11 = createSprite(690, 479, 100, 50);
  cb11.addImage(darkImg);
  cb11g = 0;
  cb11.visible = false;
  cb12 = createSprite(747, 479, 100, 50);
  cb12.addImage(darkImg);
  cb12.visible = false;
  cb13 = createSprite(804, 479, 100, 50);
  cb13.addImage(darkImg);
  cb13.visible = false;
  cb14 = createSprite(861, 479, 100, 50);
  cb14.addImage(darkImg);
  cb14.visible = false;
  cb15 = createSprite(918, 479, 100, 50);
  cb15.addImage(darkImg);
  cb15.visible = false;
  cb16 = createSprite(975, 479, 100, 50);
  cb16.addImage(darkImg);
  cb16.visible = false;

  cc1 = createSprite(177, 365, 100, 50);
  cc1.addImage(LBImg);
  cc1.visible = false;
  cc2 = createSprite(234, 365, 100, 50);
  cc2.addImage(RImg);
  cc2.visible = false;
  cc3 = createSprite(291, 365, 100, 50);
  cc3.addImage(YImg);
  cc3.visible = false;
  cc4 = createSprite(348, 365, 100, 50);
  cc4.addImage(PImg);
  cc4g = 0;
  cc4.visible = false;
  cc5 = createSprite(405, 365, 100, 50);
  cc5.addImage(DGImg);
  cc5g = 0;
  cc5.visible = false;
  cc6 = createSprite(462, 365, 100, 50);
  cc6.addImage(YImg);
  cc6.visible = false;
  cc7 = createSprite(519, 365, 100, 50);
  cc7.addImage(BRImg);
  cc7.visible = false;
  cc8 = createSprite(576, 365, 100, 50);
  cc8.addImage(OImg);
  cc8.visible = false;
  cc9 = createSprite(633, 365, 100, 50);
  cc9.addImage(LGImg);
  cc9g = 0;
  cc9.visible = false;
  cc10 = createSprite(690, 365, 100, 50);
  cc10.addImage(DBImg);
  cc10g = 0;
  cc10.visible = false;
  cc11 = createSprite(747, 365, 100, 50);
  cc11.addImage(PImg);
  cc11.visible = false;
  cc12 = createSprite(804, 365, 100, 50);
  cc12.addImage(LBImg);
  cc12.visible = false;
  cc13 = createSprite(861, 365, 100, 50);
  cc13.addImage(OImg);
  cc13.visible = false;

  cd1 = createSprite(234, 308, 100, 50);
  cd1.addImage(LGImg);
  cd1.visible = false;
  cd2 = createSprite(291, 308, 100, 50);
  cd2.addImage(OImg);
  cd2.visible = false;
  cd3 = createSprite(348, 308, 100, 50);
  cd3.addImage(BRImg);
  cd3.visible = false;
  cd4 = createSprite(405, 308, 100, 50);
  cd4.addImage(LBImg);
  cd4g = 0;
  cd4.visible = false;
  cd5 = createSprite(462, 308, 100, 50);
  cd5.addImage(DBImg);
  cd5g = 0;
  cd5.visible = false;
  cd6 = createSprite(519, 308, 100, 50);
  cd6.addImage(PImg);
  cd6.visible = false;
  cd7 = createSprite(576, 308, 100, 50);
  cd7.addImage(DGImg);
  cd7.visible = false;
  cd8 = createSprite(633, 308, 100, 50);
  cd8.addImage(YImg);
  cd8.visible = false;
  cd9 = createSprite(690, 308, 100, 50);
  cd9.addImage(OImg);
  cd9g = 0;
  cd9.visible = false;
  cd10 = createSprite(747, 308, 100, 50);
  cd10.addImage(BRImg);
  cd10g = 0;
  cd10.visible = false;
  cd11 = createSprite(804, 308, 100, 50);
  cd11.addImage(RImg);
  cd11.visible = false;

  ce1 = createSprite(291, 251, 100, 50);
  ce1.addImage(RImg);
  ce1.visible = false;
  ce2 = createSprite(348, 251, 100, 50);
  ce2.addImage(LBImg);
  ce2.visible = false;
  ce3 = createSprite(405, 251, 100, 50);
  ce3.addImage(BRImg);
  ce3g = 0;
  ce3.visible = false;
  ce4 = createSprite(462, 251, 100, 50);
  ce4.addImage(PImg);
  ce4g = 0;
  ce4.visible = false;
  ce5 = createSprite(519, 251, 100, 50);
  ce5.addImage(OImg);
  ce5.visible = false;
  ce6 = createSprite(576, 251, 100, 50);
  ce6.addImage(LGImg);
  ce6.visible = false;
  ce7 = createSprite(633, 251, 100, 50);
  ce7.addImage(BLImg);
  ce7.visible = false;
  ce8 = createSprite(690, 251, 100, 50);
  ce8.addImage(YImg);
  ce8g = 0;
  ce8.visible = false;
  ce9 = createSprite(747, 251, 100, 50);
  ce9.addImage(PImg);
  ce9g = 0;
  ce9.visible = false;

  cf1 = createSprite(348, 194, 100, 50);
  cf1.addImage(OImg);
  cf1.visible = false;
  cf2 = createSprite(405, 194, 100, 50);
  cf2.addImage(PImg);
  cf2g = 0;
  cf2.visible = false;
  cf3 = createSprite(462, 194, 100, 50);
  cf3.addImage(DGImg);
  cf3g = 0;
  cf3.visible = false;
  cf4 = createSprite(519, 194, 100, 50);
  cf4.addImage(YImg);
  cf4.visible = false;
  cf5 = createSprite(576, 194, 100, 50);
  cf5.addImage(DBImg);
  cf5.visible = false;
  cf6 = createSprite(633, 194, 100, 50);
  cf6.addImage(BRImg);
  cf6.visible = false;
  cf7 = createSprite(690, 194, 100, 50);
  cf7.addImage(LGImg);
  cf7g = 0;
  cf7.visible = false;

  cg1 = createSprite(405, 137, 100, 50);
  cg1.addImage(YImg);
  cg1g = 0;
  cg1.visible = false;
  cg2 = createSprite(462, 137, 100, 50);
  cg2.addImage(RImg);
  cg2g = 0;
  cg2.visible = false;
  cg3 = createSprite(519, 137, 100, 50);
  cg3.addImage(LBImg);
  cg3.visible = false;
  cg4 = createSprite(576, 137, 100, 50);
  cg4.addImage(PImg);
  cg4.visible = false;
  cg5 = createSprite(633, 137, 100, 50);
  cg5.addImage(DBImg);
  cg5.visible = false;

  ch1 = createSprite(462, 80, 100, 50);
  ch1.addImage(DGImg);
  ch1g = 0;
  ch1.visible = false;
  ch2 = createSprite(519, 80, 100, 50);
  ch2.addImage(OImg);
  ch2.visible = false;
  ch3 = createSprite(576, 80, 100, 50);
  ch3.addImage(DBImg);
  ch3.visible = false;




  da1 = createSprite(519, 80, 100, 50);
  da1.addImage(LBImg);
  da1.visible = false;



  db1 = createSprite(462, 137, 100, 50);
  db1.addImage(YImg);
  db1.visible = false;

  db2 = createSprite(519, 137, 100, 50);
  db2.addImage(RImg);
  db2.visible = false;

  db3 = createSprite(576, 137, 100, 50);
  db3.addImage(OImg);
  db3.visible = false;



  dc1 = createSprite(348, 194, 100, 50);
  dc1.addImage(DBImg);
  dc1.visible = false;

  dc2 = createSprite(405, 194, 100, 50);
  dc2.addImage(OImg);
  dc2.visible = false;

  dc3 = createSprite(462, 194, 100, 50);
  dc3.addImage(LBImg);
  dc3.visible = false;

  dc4 = createSprite(519, 194, 100, 50);
  dc4.addImage(YImg);
  dc4.visible = false;

  dc5 = createSprite(576, 194, 100, 50);
  dc5.addImage(BRImg);
  dc5.visible = false;

  dc6 = createSprite(633, 194, 100, 50);
  dc6.addImage(BLImg);
  dc6.visible = false;

  dc7 = createSprite(690, 194, 100, 50);
  dc7.addImage(PImg);
  dc7.visible = false;



  dd1 = createSprite(234, 251, 100, 50);
  dd1.addImage(PImg);
  dd1.visible = false;

  dd2 = createSprite(291, 251, 100, 50);
  dd2.addImage(DGImg);
  dd2.visible = false;

  dd3 = createSprite(348, 251, 100, 50);
  dd3.addImage(YImg);
  dd3.visible = false;

  dd4 = createSprite(405, 251, 100, 50);
  dd4.addImage(LBImg);
  dd4.visible = false;

  dd5 = createSprite(462, 251, 100, 50);
  dd5.addImage(RImg);
  dd5.visible = false;

  dd6 = createSprite(519, 251, 100, 50);
  dd6.addImage(BRImg);
  dd6.visible = false;

  dd7 = createSprite(576, 251, 100, 50);
  dd7.addImage(PImg);
  dd7.visible = false;

  dd8 = createSprite(633, 251, 100, 50);
  dd8.addImage(LGImg);
  dd8.visible = false;

  dd9 = createSprite(690, 251, 100, 50);
  dd9.addImage(DBImg);
  dd9.visible = false;

  dd10 = createSprite(747, 251, 100, 50);
  dd10.addImage(OImg);
  dd10.visible = false;

  dd11 = createSprite(804, 251, 100, 50);
  dd11.addImage(YImg);
  dd11.visible = false;



  de1 = createSprite(120, 308, 100, 50);
  de1.addImage(darkImg);
  de1.visible = false;

  de2 = createSprite(177, 308, 100, 50);
  de2.addImage(darkImg);
  de2.visible = false;

  de3 = createSprite(234, 308, 100, 50);
  de3.addImage(darkImg);
  de3.visible = false;

  de4 = createSprite(291, 308, 100, 50);
  de4.addImage(darkImg);
  de4.visible = false;

  de5 = createSprite(348, 308, 100, 50);
  de5.addImage(darkImg);
  de5.visible = false;

  de6 = createSprite(405, 308, 100, 50);
  de6.addImage(darkImg);
  de6.visible = false;

  de7 = createSprite(462, 308, 100, 50);
  de7.addImage(darkImg);
  de7.visible = false;

  de8 = createSprite(519, 308, 100, 50);
  de8.addImage(darkImg);
  de8.visible = false;
  
  de9 = createSprite(576, 308, 100, 50);
  de9.addImage(darkImg);
  de9.visible = false;

  de10 = createSprite(633, 308, 100, 50);
  de10.addImage(darkImg);
  de10.visible = false;

  de11 = createSprite(690, 308, 100, 50);
  de11.addImage(darkImg);
  de11.visible = false;

  de12 = createSprite(747, 308, 100, 50);
  de12.addImage(darkImg);
  de12.visible = false;

  de13 = createSprite(804, 308, 100, 50);
  de13.addImage(darkImg);
  de13.visible = false;

  de14 = createSprite(861, 308, 100, 50);
  de14.addImage(darkImg);
  de14.visible = false;

  de15 = createSprite(918, 308, 100, 50);
  de15.addImage(darkImg);
  de15.visible = false;



  df1 = createSprite(234, 365, 100, 50);
  df1.addImage(OImg);
  df1.visible = false;

  df2 = createSprite(291, 365, 100, 50);
  df2.addImage(DBImg);
  df2.visible = false;

  df3 = createSprite(348, 365, 100, 50);
  df3.addImage(PImg);
  df3.visible = false;

  df4 = createSprite(405, 365, 100, 50);
  df4.addImage(BRImg);
  df4.visible = false;

  df5 = createSprite(462, 365, 100, 50);
  df5.addImage(LBImg);
  df5.visible = false;

  df6 = createSprite(519, 365, 100, 50);
  df6.addImage(RImg);
  df6.visible = false;

  df7 = createSprite(576, 365, 100, 50);
  df7.addImage(BRImg);
  df7.visible = false;

  df8 = createSprite(633, 365, 100, 50);
  df8.addImage(PImg);
  df8.visible = false;

  df9 = createSprite(690, 365, 100, 50);
  df9.addImage(YImg);
  df9.visible = false;

  df10 = createSprite(747, 365, 100, 50);
  df10.addImage(DGImg);
  df10.visible = false;

  df11 = createSprite(804, 365, 100, 50);
  df11.addImage(LGImg);
  df11.visible = false;



  dg1 = createSprite(348, 422, 100, 50);
  dg1.addImage(LBImg);
  dg1.visible = false;

  dg2 = createSprite(405, 422, 100, 50);
  dg2.addImage(YImg);
  dg2.visible = false;

  dg3 = createSprite(462, 422, 100, 50);
  dg3.addImage(PImg);
  dg3.visible = false;

  dg4 = createSprite(519, 422, 100, 50);
  dg4.addImage(BLImg);
  dg4.visible = false;

  dg5 = createSprite(576, 422, 100, 50);
  dg5.addImage(LGImg);
  dg5.visible = false;

  dg6 = createSprite(633, 422, 100, 50);
  dg6.addImage(RImg);
  dg6.visible = false;

  dg7 = createSprite(690, 422, 100, 50);
  dg7.addImage(OImg);
  dg7.visible = false;



  dh1 = createSprite(462, 479, 100, 50);
  dh1.addImage(OImg);
  dh1.visible = false;

  dh2 = createSprite(519, 479, 100, 50);
  dh2.addImage(RImg);
  dh2.visible = false;

  dh3 = createSprite(576, 479, 100, 50);
  dh3.addImage(YImg);
  dh3.visible = false;



  ball = createSprite(displayWidth/2, displayHeight/1.21, 15, 15);
  ball.addImage(ballImg);
  ball.scale = 0.20;
  ball.velocityY = 10;

  live1 = createSprite(displayWidth-95, 20, 15, 15);
  live1.addImage(liveImg);
  live2 = createSprite(displayWidth-65, 20, 15, 15);
  live2.addImage(liveImg);
  live3 = createSprite(displayWidth-35, 20, 15, 15);
  live3.addImage(liveImg);

  gameOver = createSprite(displayWidth/2, displayHeight/2-50);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
}

function draw() {
  background(backImg);

  paddle.x = mouseX;

  if (ball.bounceOff(paddle)) {
    ball.velocityX = random(-8, 8);
    ball.velocityY = random(-8, -6);
  }
  ball.bounceOff(w1);
  ball.bounceOff(w2);
  ball.bounceOff(w3);

  if (paddle.x <= 50) {
    paddle.x = 50;
  }

  if (paddle.x >= 974) {
    paddle.x = 974;
  }

if(level == 1) {
  if (ball.bounceOff(ba1)){
    blockHit.play();
    ba1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba2)){
    blockHit.play();
    ba2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba3)){
    blockHit.play();
    ba3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba4)){
    blockHit.play();
    ba4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba5)){
    blockHit.play();
    ba5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba6)){
    blockHit.play();
    ba6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba7)){
    blockHit.play();
    ba7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba8)){
    blockHit.play();
    ba8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba9)){
    blockHit.play();
    ba9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba10)){
    blockHit.play();
    ba10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba11)){
    blockHit.play();
    ba11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba12)){
    blockHit.play();
    ba12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba13)){
    blockHit.play();
    ba13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba14)){
    blockHit.play();
    ba14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba15)){
    blockHit.play();
    ba15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bb1)){
    blockHit.play();
    bb1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb2)){
    blockHit.play();
    bb2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb3)){
    blockHit.play();
    bb3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb4)){
    blockHit.play();
    bb4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb5)){
    blockHit.play();
    bb5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb6)){
    blockHit.play();
    bb6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb7)){
    blockHit.play();
    bb7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb8)){
    blockHit.play();
    bb8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb9)){
    blockHit.play();
    bb9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb10)){
    blockHit.play();
    bb10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb11)){
    blockHit.play();
    bb11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb12)){
    blockHit.play();
    bb12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb13)){
    blockHit.play();
    bb13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb14)){
    blockHit.play();
    bb14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb15)){
    blockHit.play();
    bb15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bc1)){
    blockHit.play();
    bc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc2)){
    blockHit.play();
    bc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc3)){
    blockHit.play();
    bc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc4)){
    blockHit.play();
    bc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc5)){
    blockHit.play();
    bc5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc6)){
    blockHit.play();
    bc6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc7)){
    blockHit.play();
    bc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc8)){
    blockHit.play();
    bc8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc9)){
    blockHit.play();
    bc9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc10)){
    blockHit.play();
    bc10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc11)){
    blockHit.play();
    bc11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc12)){
    blockHit.play();
    bc12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc13)){
    blockHit.play();
    bc13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc14)){
    blockHit.play();
    bc14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc15)){
    blockHit.play();
    bc15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bd1)){
    blockHit.play();
    bd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd2)){
    blockHit.play();
    bd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd3)){
    blockHit.play();
    bd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd4)){
    blockHit.play();
    bd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd5)){
    blockHit.play();
    bd5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd6)){
    blockHit.play();
    bd6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd7)){
    blockHit.play();
    bd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd8)){
    blockHit.play();
    bd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd9)){
    blockHit.play();
    bd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd10)){
    blockHit.play();
    bd10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd11)){
    blockHit.play();
    bd11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd12)){
    blockHit.play();
    bd12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd13)){
    blockHit.play();
    bd13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd14)){
    blockHit.play();
    bd14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd15)){
    blockHit.play();
    bd15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(be1)){
    blockHit.play();
    be1.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be2)){
    blockHit.play();
    be2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be3)){
    blockHit.play();
    be3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be4)){
    blockHit.play();
    be4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be5)){
    blockHit.play();
    be5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be6)){
    blockHit.play();
    be6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be7)){
    blockHit.play();
    be7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be8)){
    blockHit.play();
    be8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be9)){
    blockHit.play();
    be9.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be10)){
    blockHit.play();
    be10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be11)){
    blockHit.play();
    be11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be12)){
    blockHit.play();
    be12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be13)){
    blockHit.play();
    be13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be14)){
    blockHit.play();
    be14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be15)){
    blockHit.play();
    be15.destroy();
    score = score + 10;
    counter = counter + 1;
  }


  if (ball.bounceOff(bf1)){
    blockHit.play();
    bf1.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball.bounceOff(bf2)){
    blockHit.play();
    bf2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf3)){
    blockHit.play();
    bf3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf4)){
    blockHit.play();
    bf4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf5)){
    blockHit.play();
    bf5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf6)){
    blockHit.play();
    bf6.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball.bounceOff(bf7)){
    blockHit.play();
    bf7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf8)){
    blockHit.play();
    bf8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf9)){
    blockHit.play();
    bf9.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball.bounceOff(bf10)){
    blockHit.play();
    bf10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf11)){
    blockHit.play();
    bf11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf12)){
    blockHit.play();
    bf12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf13)){
    blockHit.play();
    bf13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf14)){
    blockHit.play();
    bf14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf15)){
    blockHit.play();
    bf15.destroy();
    score = score + 10;
    counter = counter + 1;
  }


  if (ball.bounceOff(bg1)){
    blockHit.play();
    bg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg2)){
    blockHit.play();
    bg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg3)){
    blockHit.play();
    bg3.destroy();
    score = score + 5;
    counter = counter + 1;

  }
  if (ball.bounceOff(bg4)){
    blockHit.play();
    bg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg5)){
    blockHit.play();
    bg5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg6)){
    blockHit.play();
    bg6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg7)){
    blockHit.play();
    bg7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg8)){
    blockHit.play();
    bg8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg9)){
    blockHit.play();
    bg9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg10)){
    blockHit.play();
    bg10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg11)){
    blockHit.play();
    bg11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg12)){
    blockHit.play();
    bg12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg13)){
    blockHit.play();
    bg13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg14)){
    blockHit.play();
    bg14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg15)){
    blockHit.play();
    bg15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bh1)){
    blockHit.play();
    bh1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh2)){
    bh2.destroy();
    blockHit.play();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh3)){
    blockHit.play();
    bh3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh4)){
    blockHit.play();
    bh4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh5)){
    blockHit.play();
    bh5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh6)){
    blockHit.play();
    bh6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh7)){
    blockHit.play();
    bh7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh8)){
    blockHit.play();
    bh8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh9)){
    blockHit.play();
    bh9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh10)){
    blockHit.play();
    bh10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh11)){
    blockHit.play();
    bh11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh12)){
    blockHit.play();
    bh12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh13)){
    blockHit.play();
    bh13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh14)){
    blockHit.play();
    bh14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh15)){
    blockHit.play();
    bh15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bi1)){
    blockHit.play();
    bi1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi2)){
    blockHit.play();
    bi2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi3)){
    blockHit.play();
    bi3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi4)){
    blockHit.play();
    bi4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi5)){
    blockHit.play();
    bi5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi6)){
    blockHit.play();
    bi6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi7)){
    blockHit.play();
    bi7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi8)){
    blockHit.play();
    bi8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi9)){
    blockHit.play();
    bi9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi10)){
    blockHit.play();
    bi10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi11)){
    blockHit.play();
    bi11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi12)){
    blockHit.play();
    bi12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi13)){
    blockHit.play();
    bi13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi14)){
    blockHit.play();
    bi14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi15)){
    blockHit.play();
    bi15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bj1)){
    blockHit.play();
    bj1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj2)){
    blockHit.play();
    bj2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj3)){
    blockHit.play();
    bj3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj4)){
    blockHit.play();
    bj4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj5)){
    blockHit.play();
    bj5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj5)){
    blockHit.play();
    bj5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj6)){
    blockHit.play();
    bj6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj7)){
    bj7.destroy();
    blockHit.play();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj8)){
    blockHit.play();
    bj8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj9)){
    blockHit.play();
    bj9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj10)){
    blockHit.play();
    bj10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj11)){
    bj11.destroy();
    blockHit.play();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj12)){
    blockHit.play();
    bj12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj13)){
    blockHit.play();
    bj13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj14)){
    blockHit.play();
    bj14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj15)){
    blockHit.play();
    bj15.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (counter == 150) {
    level = 2;
    counter = 0;
  }
}

if (level == 2) {
  ca1.visible = true;
  ca2.visible = true;
  ca3.visible = true;
  ca4.visible = true;
  ca5.visible = true;
  ca6.visible = true;
  ca7.visible = true;
  ca8.visible = true;
  ca9.visible = true;
  ca10.visible = true;
  ca11.visible = true;
  ca12.visible = true;
  ca13.visible = true;
  ca14.visible = true;
  ca15.visible = true;

  cb0.visible = true;
  cb1.visible = true;
  cb2.visible = true;
  cb3.visible = true;
  cb4.visible = true;
  cb5.visible = true;
  cb6.visible = true;
  cb7.visible = true;
  cb8.visible = true;
  cb9.visible = true;
  cb10.visible = true;
  cb11.visible = true;
  cb12.visible = true;
  cb13.visible = true;
  cb14.visible = true;
  cb15.visible = true;
  cb16.visible = true;

  cc1.visible = true;
  cc2.visible = true;
  cc3.visible = true;
  cc4.visible = true;
  cc5.visible = true;
  cc6.visible = true;
  cc7.visible = true;
  cc8.visible = true;
  cc9.visible = true;
  cc10.visible = true;
  cc11.visible = true;
  cc12.visible = true;
  cc13.visible = true;

  cd1.visible = true;
  cd2.visible = true;
  cd3.visible = true;
  cd4.visible = true;
  cd5.visible = true;
  cd6.visible = true;
  cd7.visible = true;
  cd8.visible = true;
  cd9.visible = true;
  cd10.visible = true;
  cd11.visible = true;

  ce1.visible = true;
  ce2.visible = true;
  ce3.visible = true;
  ce4.visible = true;
  ce5.visible = true;
  ce6.visible = true;
  ce7.visible = true;
  ce8.visible = true;
  ce9.visible = true;

  cf1.visible = true;
  cf2.visible = true;
  cf3.visible = true;
  cf4.visible = true;
  cf5.visible = true;
  cf6.visible = true;
  cf7.visible = true;

  cg1.visible = true;
  cg2.visible = true;
  cg3.visible = true;
  cg4.visible = true;
  cg5.visible = true;

  ch1.visible = true;
  ch2.visible = true;
  ch3.visible = true;

  if (ball.bounceOff(ca1)){
    blockHit.play();
    ca1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca2)){
    blockHit.play();
    ca2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca3)){
    blockHit.play();
    ca3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca4)){
    blockHit.play();
    ca4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca5)){
    blockHit.play();
    ca5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca6)){
    blockHit.play();
    ca6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca7)){
    blockHit.play();
    ca7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca8)){
    blockHit.play();
    ca8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca9)){
    blockHit.play();
    ca9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca10)){
    blockHit.play();
    ca10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca11)){
    blockHit.play();
    ca11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca12)){
    blockHit.play();
    ca12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca13)){
    blockHit.play();
    ca13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca14)){
    blockHit.play();
    ca14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca15)){
    blockHit.play();
    ca15.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cb0)) {
    blockHit.play();
    cb0.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb1)) {
    blockHit.play();
    cb1.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb2)) {
    blockHit.play();
    cb2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb3)) {
    blockHit.play();
    cb3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb4)) {
    blockHit.play();
    cb4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb5)) {
    blockHit.play();
    cb5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb6)) {
    blockHit.play();
    cb6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb7)) {
    blockHit.play();
    cb7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb8)) {
    blockHit.play();
    cb8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb9)) {
    blockHit.play();
    cb9.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb10)) {
    blockHit.play();
    cb10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb11)) {
    blockHit.play();
    cb11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb12)) {
    blockHit.play();
    cb12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb13)) {
    blockHit.play();
    cb13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb14)) {
    blockHit.play();
    cb14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb15)) {
    blockHit.play();
    cb15.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb16)) {
    blockHit.play();
    cb16.destroy();
    score = score + 10;
    counter = counter + 1;
  }

  if (ball.bounceOff(cc1)) {
    blockHit.play();
    cc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc2)) {
    blockHit.play();
    cc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc3)) {
    blockHit.play();
    cc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc4)) {
    blockHit.play();
    cc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc5)) {
    blockHit.play();
    cc5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc6)) {
    blockHit.play();
    cc6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc7)) {
    blockHit.play();
    cc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc8)) {
    blockHit.play();
    cc8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc9)) {
    blockHit.play();
    cc9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc10)) {
    blockHit.play();
    cc10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc11)) {
    blockHit.play();
    cc11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc12)) {
    blockHit.play();
    cc12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc13)) {
    blockHit.play();
    cc13.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cd1)) {
    blockHit.play();
    cd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd2)) {
    blockHit.play();
    cd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd3)) {
    blockHit.play();
    cd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd4)) {
    blockHit.play();
    cd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd5)) {
    blockHit.play();
    cd5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd6)) {
    blockHit.play();
    cd6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd7)) {
    blockHit.play();
    cd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd8)) {
    blockHit.play();
    cd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd9)) {
    blockHit.play();
    cd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd10)) {
    blockHit.play();
    cd10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd11)) {
    blockHit.play();
    cd11.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(ce1)) {
    blockHit.play();
    ce1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce2)) {
    blockHit.play();
    ce2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce3)) {
    blockHit.play();
    ce3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce4)) {
    blockHit.play();
    ce4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce5)) {
    blockHit.play();
    ce5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce6)) {
    blockHit.play();
    ce6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce7)) {
    blockHit.play();
    ce7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce8)) {
    blockHit.play();
    ce8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce9)) {
    blockHit.play();
    ce9.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cf1)) {
    blockHit.play();
    cf1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf2)) {
    blockHit.play();
    cf2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf3)) {
    blockHit.play();
    cf3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf4)) {
    blockHit.play();
    cf4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf5)) {
    blockHit.play();
    cf5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf6)) {
    blockHit.play();
    cf6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf7)) {
    blockHit.play();
    cf7.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cg1)) {
    blockHit.play();
    cg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg2)) {
    blockHit.play();
    cg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg3)) {
    blockHit.play();
    cg3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg4)) {
    blockHit.play();
    cg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg5)) {
    blockHit.play();
    cg5.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(ch1)) {
    blockHit.play();
    ch1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ch2)) {
    blockHit.play();
    ch2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ch3)) {
    blockHit.play();
    ch3.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (counter == 63) {
    level = 3;
    counter = 0;
  }
}

if (level == 3) {
  da1.visible = true;
  
  db1.visible = true;
  db2.visible = true;
  db3.visible = true;

  dc1.visible = true;
  dc2.visible = true;
  dc3.visible = true;
  dc4.visible = true;
  dc5.visible = true;
  dc6.visible = true;
  dc7.visible = true;

  dd1.visible = true;
  dd2.visible = true;
  dd3.visible = true;
  dd4.visible = true;
  dd5.visible = true;
  dd6.visible = true;
  dd7.visible = true;
  dd8.visible = true;
  dd9.visible = true;
  dd10.visible = true;
  dd11.visible = true;

  de1.visible = true;
  de2.visible = true;
  de3.visible = true;
  de4.visible = true;
  de5.visible = true;
  de6.visible = true;
  de7.visible = true;
  de8.visible = true;
  de9.visible = true;
  de10.visible = true;
  de11.visible = true;
  de12.visible = true;
  de13.visible = true;
  de14.visible = true;
  de15.visible = true;

  df1.visible = true;
  df2.visible = true;
  df3.visible = true;
  df4.visible = true;
  df5.visible = true;
  df6.visible = true;
  df7.visible = true;
  df8.visible = true;
  df9.visible = true;
  df10.visible = true;
  df11.visible = true;

  dg1.visible = true;
  dg2.visible = true;
  dg3.visible = true;
  dg4.visible = true;
  dg5.visible = true;
  dg6.visible = true;
  dg7.visible = true;

  dh1.visible = true;
  dh2.visible = true;
  dh3.visible = true;

  if (ball.bounceOff(da1)) {
    blockHit.play();
    da1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(db1)) {
    blockHit.play();
    db1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(db2)) {
    blockHit.play();
    db2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(db3)) {
    blockHit.play();
    db3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc1)) {
    blockHit.play();
    dc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc2)) {
    blockHit.play();
    dc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc3)) {
    blockHit.play();
    dc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc4)) {
    blockHit.play();
    dc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc5)) {
    blockHit.play();
    dc5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc6)) {
    blockHit.play();
    dc6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc7)) {
    blockHit.play();
    dc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd1)) {
    blockHit.play();
    dd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd2)) {
    blockHit.play();
    dd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd3)) {
    blockHit.play();
    dd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd4)) {
    blockHit.play();
    dd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd5)) {
    blockHit.play();
    dd5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd6)) {
    blockHit.play();
    dd6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd7)) {
    blockHit.play();
    dd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd8)) {
    blockHit.play();
    dd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd9)) {
    blockHit.play();
    dd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd10)) {
    blockHit.play();
    dd10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd11)) {
    blockHit.play();
    dd11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de1)) {
    blockHit.play();
    de1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de2)) {
    blockHit.play();
    de2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de3)) {
    blockHit.play();
    de3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de4)) {
    blockHit.play();
    de4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de5)) {
    blockHit.play();
    de5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de6)) {
    blockHit.play();
    de6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de7)) {
    blockHit.play();
    de7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de8)) {
    blockHit.play();
    de8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de9)) {
    blockHit.play();
    de9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de10)) {
    blockHit.play();
    de10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de11)) {
    blockHit.play();
    de11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de12)) {
    blockHit.play();
    de12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de13)) {
    blockHit.play();
    de13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de14)) {
    blockHit.play();
    de14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de15)) {
    blockHit.play();
    de15.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df1)) {
    blockHit.play();
    df1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df2)) {
    blockHit.play();
    df2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df3)) {
    blockHit.play();
    df3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df4)) {
    blockHit.play();
    df4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df5)) {
    blockHit.play();
    df5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df6)) {
    blockHit.play();
    df6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df7)) {
    blockHit.play();
    df7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df8)) {
    blockHit.play();
    df8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df9)) {
    blockHit.play();
    df9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df10)) {
    blockHit.play();
    df10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df11)) {
    blockHit.play();
    df11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg1)) {
    blockHit.play();
    dg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg2)) {
    blockHit.play();
    dg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg3)) {
    blockHit.play();
    dg3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg4)) {
    blockHit.play();
    dg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg5)) {
    blockHit.play();
    dg5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg6)) {
    blockHit.play();
    dg6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg7)) {
    blockHit.play();
    dg7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dh1)) {
    blockHit.play();
    dh1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dh2)) {
    blockHit.play();
    dh2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dh3)) {
    blockHit.play();
    dh3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
}


  if (ball.y > displayHeight+10) {
    if (lives == 2){
      ball.x = displayWidth/2;
      ball.y = displayHeight/1.21;
      lives = lives - 1;
      live1.destroy();
    }
    else if (lives == 1){
      ball.x = displayWidth/2;
      ball.y = displayHeight/1.21;
      lives = lives - 1;
      live2.destroy();
    }
    else if (lives == 0){
      ball.destroy();
      live3.destroy();
      gameOver.visible = true;
    }
  }

  textSize(30);
  text('Score: '+score, 20, 30);

  drawSprites();
}