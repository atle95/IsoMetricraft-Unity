#pragma strict

//var newSprite : Sprite;
//var update = 0;
 
function Start () 
{
}

function Update () 
{
//	update++;
//	if (Time.deltaTime %60 == 0) GetComponent(SpriteRenderer).sprite = newSprite;

//    GetComponent(SpriteRenderer).sprite = newSprite;
	transform.Rotate(0, 0, 20*Time.deltaTime);
}
