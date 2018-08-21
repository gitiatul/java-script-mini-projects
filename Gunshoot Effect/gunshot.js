window.onclick=gunshot;
function gunshot(event)
{
	//1.clone the image element
	var e1=document.getElementById('gunshot').cloneNode();
	//2.append it to HTML document
	 document.body.appendChild(e1);
    //3.remove the display:none style
	e1.style.display='';
	//4.show image at the mouse coordinates
	e1.style.left=event.clientX -(e1.offsetWidth/2)+'px';
	e1.style.top=event.clientY -(e1.offsetHeight/2)+'px';
	
	//5.add sound effect
	var shotsound=new Audio();
	shotsound.src="sound.mp3";
	shotsound.play();
	}
	