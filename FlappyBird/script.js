let board;
let boardWidth = 1250;
let boradHeight = 1024;
let context = "";

let pipeHeightTop = 0;
let pipeHeightBottom = 0;
let pipeX = boardWidth;
let pipeY = 0;
let pipeArray = [];
let pipeHeight = 722;
let pipeWidth = 64;

let topPipeImg;
let bottomPipeImg;

// physics
let velocityX = -2; // pipes moving the left speed

const setPipeHeight = () => {
    pipeHeightTop = Math.floor(Math.random() * 500);
    pipeHeightBottom = Math.floor(Math.random() * 500);

    pipeHeightTop > 200 ? pipeHeightTop : 300;
    pipeHeightBottom > 300 ? pipeHeightBottom : 400 + "px";

    topPipe.style.height = pipeHeightTop + "px";
    bottomPipe.style.height = pipeHeightBottom + "px";

    console.log(pipeHeightBottom);
    console.log(pipeHeightTop);

    setPipeX();
}

const setPipeX = () => {
    pipeX = Math.floor(Math.random() * 1250);
    pipeX > 200 ? pipeX + "px" : 300 + "px";

    topPipe.style.left = pipeX + "px";
    bottomPipe.style.left = pipeX + "px";
}

setInterval(setPipeHeight, 1500)

let birdWidth = 40; // 408/228 => 102/57 => 34/19
let birdHeight = 50;
let birdX = boardWidth / 8;
let birdY = boradHeight / 2;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight,
}

window.onload = function () {
    board = document.getElementById("flappyBirdGame");
    board.width = boardWidth;
    board.height = boradHeight;
    context = board.getContext("2d");

    // set the bird
    // context.fillStyle = "green";
    // context.fillRect(bird.x,bird.y,bird.width,bird.height);

    // load the image 
    birdImg = new Image();
    birdImg.src = "Image/flappybird.png";

    birdImg.onload = function () {
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "Image/toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "Image/bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipe, 1500);
}

function placePipe() {

    let randomPipeY = pipeY - pipeHeight/4 - Math.floor(Math.random() * (pipeHeight/2));
    let openingSpace = board.height/4;

    let topPipe = {
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false,
    }

    let bottomPipe = {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false,
    }

    pipeArray.push(topPipe);
    pipeArray.push(bottomPipe);
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    // draw the image
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    // draw the pipe
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    }
}