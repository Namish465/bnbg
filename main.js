leftwristX = 0 ;
rightwristX = 0;
difference = 0;

function setup()
{
video = createCapture(VIDEO);
video.size(550,500);

Canvas = createCanvas(550,500);
Canvas.position(550,85);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
console.log('poseNet is Initialized');

}
function draw()
{
    textSize(difference); fill('#FFE787'); text('Namish', 50, 400);
    background('#a4afb3');
}

function gotPoses(results)
{
if(results.lenght > 0)
{
    console.log(results);
    
    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX);

    console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + "difference = " + difference);

}

}