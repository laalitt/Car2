canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
race_track_image_array=["race track 1.jpg","Race Track 2.jpg","race track 3.jpg","race track 4.jpg"];
random_number=Math.floor(Math.random()*4);
car_width=100;
car_height=90;
car_x=10;
car_y=10;
background_image=race_track_image_array[random_number];
console.log("background_image="+background_image);
car_image="car1.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car_imgTag=new Image();
    car_imgTag.onload=uploadrover;
    car_imgTag.src=car_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
}
function up(){
    if(car_y>=0){
        car_y=car_y-10;
        console.log("when up arrow is pressed x="+car_x+ ",y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function down(){
    if(car_y<=500){
        car_y=car_y+10;
        console.log("when down arrow is pressed x="+car_x+ ",y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function right(){
    if(car_x<=700){
        car_x=car_x+10;
        console.log("when right arrow is pressed x="+car_x+ ",y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function left(){
    if(car_x>=0){
        car_x=car_x-10;
        console.log("when left arrow is pressed x="+car_x+ ",y="+car_y);
        uploadBackground();
        uploadecar();
    }
}