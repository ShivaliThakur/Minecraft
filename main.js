var canvas= new fabric.Canvas('myCanvas');
/// variables for updating player image and block image ///
var player_object= " ";
var block_image_object= " ";

player_x=10;
player_y=10;
block_image_height =30;
block_image_width = 30;

// codes for updating player image //
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(130);
        player_object.set({
            left: player_x,
            top: player_y
        });
        canvas.add(player_object);
    });
}

// notes for updating block images//
// Since we have different block images, we will be using a using a variable(get_image) to update the images//
function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            left: player_x,
            top: player_y
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    /// Shift + P ///
    if( e.shiftKey==true && keyPressed=='80'){
        block_image_height=block_image_height + 10;
        block_image_width=block_image_width + 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        console.log("Shift + P is pressed, 10 saal ke baad");
    }
    /// Coding is Incorrect ///

    if( e.shiftKey==true && keyPressed=='77'){
        block_image_height=block_image_height - 10;
        block_image_width=block_image_width - 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        console.log("Shift + M is pressed, 18 saal ke baad");
    }

    if(keyPressed == '67'){
        newImage('cloud.jpg');
        console.log("c");
    }

    if(keyPressed == '68'){
        newImage('dark_green.png');
        console.log("d");
    }

    if(keyPressed == '71'){
        newImage('ground.png');
        console.log("g");
    }

    if(keyPressed == '76'){
        newImage('light_green.png');
        console.log("l");
    }

    if(keyPressed == '82'){
        newImage('roof.jpg');
        console.log("r");
    }

    if(keyPressed == '84'){
        newImage('trunk.jpg');
        console.log("t");
    }

    if(keyPressed == '85'){
        newImage('unique.png');
        console.log("u");
    }

    if(keyPressed == '87'){
        newImage('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '89'){
        newImage('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '38'){
       up();
       console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
     }
     if (keyPressed == '37'){
        left();
        console.log("left");
     }
     if (keyPressed == '39'){
        right();
        console.log("right");
     }
}

function up(){
    if (player_y>0){
        player_y= player_y- block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<= 470){
        player_y= player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>0){
        player_x= player_x- block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<=650){
        player_x= player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
