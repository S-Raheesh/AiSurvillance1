function setup(){
  canvas = createCanvas(380,380);
  canvas.center();
  video.hide();
  
}
function preload(){
    video = createVideo('video.mp4');
    
}
function draw(){
    image(video,0,0,380,380);
}