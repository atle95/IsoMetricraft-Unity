#pragma strict

function Start () {
	
}

function Update () {
  var mousePosition = Vector2 (Camera.main.ScreenToWorldPoint (Input.mousePosition).x, Camera.main.ScreenToWorldPoint (Input.mousePosition).y);
  transform.position = mousePosition;
}
