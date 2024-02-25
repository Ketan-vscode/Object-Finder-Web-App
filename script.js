status = "";

function setup(){
    canvas = createCanvas(380,380);
    canvas.position(500,285);
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objcetDetector = ml5.objcetDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
    input = document.getElementById("input1");
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}

function draw(){
    image(video, 0,0,500,285)
}