window.onkeydown=moveObject;


var LEFT_KEY=37;
var UP_KEY=38;
var RIGHT_KEY=39;
var DOWN_KEY=40;

var object=document.getElementById('object');
var speed=20;
function moveObject(event)
{
	var key=event.keyCode;
	
	//this is to move up down right and left
	if(key==LEFT_KEY)
	{
		object.style.left=object.offsetLeft-speed+'px';
		
	}else if(key==UP_KEY)
	{
		object.style.top=object.offsetTop-speed+'px';
		
	}else if(key==RIGHT_KEY)
	{
		object.style.left=object.offsetLeft+speed+'px';
		
	}else if(key==DOWN_KEY)
	{
		object.style.top=object.offsetTop+speed+'px';
		
	}
}