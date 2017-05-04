#pragma strict

var newSprite : Sprite;
var update = 0;
var startTime = 0;
var endTime = 180;
 
function Start () 
{

}

function RotateSprite (degrees)
{
  transform.Rotate(0, 0, degrees);
}

function Update () 
{
	update++;
//    
    if((startTime < update) && (update < endTime))
    {
	  transform.Rotate(0, 0, 1);
	}
	else if(update >= endTime)
	{
      GetComponent(SpriteRenderer).sprite = newSprite;
	  
	}

}
