canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
block_image="";
player_image="";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
player_image=Img;
player_image.scaleToWidth(150);
player_image.scaleToHeight(140);
player_image.set({
    top:player_y,
    left:player_x
});
canvas.add(player_image);
});

}

function block_update(get_image){
fabric.Image.fromURL(get_image,function(Img){
block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
top:player_y,
left:player_x

});
canvas.add(block_image)
});

}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode
    console.log(keypressed)

    if(e.shiftKey==true && keypressed=="80")
    {
        block_width=block_width+10
        block_height=block_height+10
        document.getElementById("width").innerHTML=block_width
        document.getElementById("height").innerHTML=block_height
    }

    if(e.shiftKey==true && keypressed=="77")
    {
        block_width=block_width-10
        block_height=block_height-10
        document.getElementById("width").innerHTML=block_width
        document.getElementById("height").innerHTML=block_height
    }

    if(keypressed=="38"){
up()
console.log("up")
    }

    if(keypressed=="37"){
        left()
        console.log("left")
            }

            if(keypressed=="39"){
                right()
                console.log("right")
                    }

                    if(keypressed=="40"){
                        down()
                        console.log("down")
                            }

 if(keypressed=="87")  
 {
     block_update('wall.jpg')
     console.log("w")
 }       
 
 if(keypressed=="71")  
 {
     block_update("ground.png")
     console.log("g")
 }  
 if(keypressed=="76")  
 {
     block_update("light_green.png")
     console.log("l")
 } 
 
 if(keypressed=="84")  
 {
     block_update("trunk.jpg")
     console.log("t")
 }    
 
 if(keypressed=="82")  
 {
     block_update("roof.jpg")
     console.log("r")
 }   
 
 if(keypressed=="89")  
 {
     block_update("yellow_wall.png")
     console.log("y")
 }
 
 if(keypressed=="68")  
 {
     block_update("dark_green.png")
     console.log("d")
 }  
 
 if(keypressed=="85")  
 {
     block_update("unique.png")
     console.log("u")
 }  
 
 if(keypressed=="67")  
 {
     block_update("cloud.jpg")
     console.log("c")
 }      
}
function up()
{
 if(player_y>=0)
 {
     player_y=player_y-block_height;
     canvas.remove(player_image);
     player_update()
 }
}

function down()
{
 if(player_y<=500)
 {
     player_y=player_y+block_height;
     canvas.remove(player_image);
     player_update()
 }
}


function left()
{
 if(player_x>0)
 {
     player_x=player_x-block_width;
     canvas.remove(player_image);
     player_update()
 }
}


function right()
{
 if(player_x<=800)
 {
     player_x=player_x+block_width;
     canvas.remove(player_image);
     player_update()
 }
}
