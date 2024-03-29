status = "";
objects = [];

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

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            console.log(object.length);
            fill('ff0000')
            percent = (objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke('#ff0000')
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

            if(objects[i].label == input_text){
                video.stop();
                object_detector.detect(gotResult);
                document.getElementById("found").innerHTML = input_text + "Found";
                var synth = window.speechSynthesis;
                var utterThis = new SpeechSynthesisUtterance(input_text + found);
                synth.speak(utterThis);
            }
            else{
                document.getElementById("found").innerHTML = input_text + "Not found"
            }
        }
    }
}