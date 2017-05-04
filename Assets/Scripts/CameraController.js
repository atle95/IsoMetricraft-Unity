#pragma strict

var player : GameObject; 

function Start () {
	
}

function Update () 
{
  var tmp = transform.position;
  tmp.x = player.transform.position.x;
  tmp.y = player.transform.position.y;
  transform.position = tmp;
}
