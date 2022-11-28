song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftWrist=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide()
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
       console.log("scoreLeftWrist="+scoreLeftWrist);

        leftWristX=results[0].poses.leftWrist.x;
        leftWristY=results[0].poses.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].poses.rightWrist.x;
        rightWristY=results[0].poses.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}
function modalLoaded(){
    console.log('PoseNet is initialized');
}
function preload(){
    song1=loadSound("music1.mp3");
    song2=loadSound("music2.mp3");
}


function draw(){
    image(video,0,0,600,500);
    fill("#8B008B");
    stroke("#8B008B");
    if(scoreLeftWrist >0.2){

        circle(leftWristX,leftWristY,20);
        song2.stop();
    }
    if(song1==false){
        song1.play();
        document.getElementById("song1").innerHTML="song1="+song1;
    }
}
function play(){
    song.play();
    song.volume(1);
    song.rate(1);
}
