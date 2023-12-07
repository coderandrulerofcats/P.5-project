function preload(){

}
function setup(){
canvas=createCanvas(800,700);
canvas.position(100,250);
img.src="https://th.bing.com/th/id/R.03f137aa3456f51c9f62d9e876e7a9ff?rik=tMY5NiYPQWnnkg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f1%2fe%2f1129346-cute-cats-wallpaper-1080x1920-full-hd.jpg&ehk=%2fJcdRdco6dASg87GmgQEx5VyEz7bYP%2fM%2bGHwd2mq20g%3d&risl=&pid=ImgRaw&r=0"
tint_color="";
video.hide();
}

function draw(){
image(video, 0,0,800,700);
tint(tint_color);
}


function filter_tint(){
tint_color=document.getElementById("color_name").value;
}