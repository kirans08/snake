var dir="r";
var pdir="r";
var targx;
var targy;
var positionsx=new Array();
var positionsy=new Array();
var movno=0;
var rand=Math.random();
rand=parseInt((rand*100)%51)*20;
targx=rand;

rand=Math.random();
rand=parseInt((rand*100)%20)*20;
targy=rand;

var score=0;
var nob=1;
var positionx;
var positiony;
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
var img=document.getElementById("image");


function newtarg()
{

rand=Math.random();
rand=parseInt((rand*100)%51)*20;
targx=rand;

rand=Math.random();
rand=parseInt((rand*100)%20)*20;
targy=rand;
for(var i=-nob;i<0;i++)
{

if(targx==positionsx[i+movno]&&targy==positionsy[i+movno])
{
	rand=Math.random();
rand=parseInt((rand*100)%51)*20;
targx=rand;

rand=Math.random();
rand=parseInt((rand*100)%20)*20;
targy=rand;
i=-nob;

}



};





score+=10;
nob++;
$("#score").fadeOut();
$("#score").fadeIn();
setTimeout(function(){
$("#score").html("Score : "+score);
},100);
}



function move()
{
cxt.fillStyle="#000";
cxt.fillRect(0,0,1024,1000);

positionsx[movno]=positionx;
positionsy[movno]=positiony;
movno++;

cxt.fillStyle="#00F";
cxt.fillRect(targx,targy,20,20);

for(var i=-nob;i<0;i++)
{

if(positionx==positionsx[i+movno]&&positiony==positionsy[i+movno]&&i<-1)
{
	nob=1;
	score=0;
	$("#score").html("Score : 0").slideDown(100);
}

cxt.fillStyle="#FF0000";
cxt.fillRect(positionsx[i+movno],positionsy[i+movno],20,20);
pdir=dir;

};




if(positionx==targx&&positiony==targy)
{
	newtarg();
}

if(dir=='r')
	positionx+=20;
else if(dir=='l')
	positionx-=20;
else if(dir=='d')
	positiony+=20;
else if(dir=='u')
	positiony-=20;

if(positionx>1000)
{
	positionx=0;
}
else if(positiony>380)
{
	positiony=0;
}
else if(positionx<0)
{
	positionx=1000;
}
else if(positiony<0)
{
	positiony=380;
}

setTimeout(move, 100);
}

$(document).ready(function(){
cxt.fillStyle="#000";
cxt.fillRect(0,0,1024,1000);
$("canvas").slideDown(5000);
positionx=0;
positiony=0;




setTimeout(move, 1000);


$(document).keypress(function(event){
	event.preventDefault();
	if(event.which==119)
	{
		if(pdir!='d')
		dir='u';
	}
    else if(event.which==97)
    {
    	if(pdir!='r')
		dir='l';
	}
	else if(event.which==115)
	{
		if(pdir!='u')
		dir='d';
	}
	else if(event.which==100)
	{
		if(pdir!='l')
		dir='r';
	}




});



});