var string="This typing text animation will teach how to create the basic animation in javascript using html &css  .You can placeyour string data here and see the magic!!!";

var strArray=string.split("");
function animate()
{
	if(strArray.length>0)
	{
		document.getElementById('display').innerHTML+=strArray.shift();
	}
	else
	{
		document.getElementById('display').innerHTML='';
		strArray=string.split("");
	}
	setTimeout(animate,50);
}
animate();