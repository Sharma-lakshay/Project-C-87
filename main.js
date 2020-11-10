var canvas= new fabric.Canvas("myCanvas");
item_image_width= 30;
item_image_height= 30;

player_x= 10;
player_y= 10;

var player_object= "";
var item_image_object= "";

function player_update(){
  fabric.Image.fromURL("player.png", function(Img){
      player_object= Img;
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({
          top: player_y,
          left: player_x
      });
      canvas.add(player_object);
  });

}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
    item_image_object= Img;
    item_image_object.scaleToWidth(item_image_width);
    item_image_object.scaleToHeight(item_image_height);
    item_image_object.set({
     top: player_y,
     left: player_x
    });
    canvas.add(item_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == "80")
    {
     console.log("shift and p pressed together");
     block_image_width= item_image_width + 10;
     block_image_height= item_image_height + 10;
     document.getElementById("current_width").innerHTML= item_image_width;
     document.getElementById("current_height").innerHTML= item_image_height;
     
    }

    if(e.shiftKey && keyPressed == "77")
    {
     console.log("shift and m pressed together");
     block_image_width= item_image_width - 10;
     block_image_height= item_image_height - 10;
     document.getElementById("current_width").innerHTML= item_image_width;
     document.getElementById("current_height").innerHTML= item_image_height;
     
    }
    
    if(keyPressed == "38") {
        up();
    console.log("up is pressed");
    }

    if(keyPressed == "40") {
        down();
    console.log("down is pressed");
    }

    if(keyPressed == "39") {
        right();
    console.log("right is pressed");
    }

    if(keyPressed == "37") {
        left();
    console.log("left is pressed");
    
    }

if(keyPressed == "70"){
    new_image("ironman_face.png");
    console.log("f");
}

if(keyPressed == "66"){
    new_image("spiderman_body.png");
    console.log("b");
}

if(keyPressed == "76"){
    new_image("hulk_legs.png");
    console.log("l");
}

if(keyPressed == "82"){
    new_image("thor_right_hand.png");
    console.log("r");
}

if(keyPressed == "72"){
    new_image("captain_america_left_hand.png");
    console.log("h");
}
    
}