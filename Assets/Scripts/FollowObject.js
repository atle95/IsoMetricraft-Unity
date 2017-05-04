#pragma strict

var target : GameObject; 

function Start () {

	
}

function Update () 
{
  var tmp = transform.position;
  tmp.x = target.transform.position.x;
  tmp.y = target.transform.position.y;
  transform.position = tmp;
}
