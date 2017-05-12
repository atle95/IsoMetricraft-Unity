#pragma strict

public var arrows      : GameObject[];
public var arrow       : GameObject;
public var arrowSprite : Sprite;
public var emptySprite : Sprite;
public var connections : int;
public var tileConnections : GameObject[];


function Start () 
{
  arrowSprite = arrow.GetComponent(SpriteRenderer).sprite;
  emptySprite = null;

  for(var i = 0; i < 6; i++)
  {
    var tempArrow = Instantiate(arrow, transform.position, Quaternion.identity);
    tempArrow.GetComponent(Transform).Rotate(0,0,i*60);

    tempArrow.GetComponent(SpriteRenderer).sprite = arrowSprite;
    arrows[i] = tempArrow;
  }
  SetArrows(connections);
}

function getBits(input : int)
{
  var bits = new Array(6);
  for (var i = 6; i >= 0; i--) 
  {
    bits[i] = (input & (1 << i)) != 0;
  }
  return bits;
}

function SetConnections(input : int)
{
  connections = input;
}


function SetArrows(input : int)
{
  var directions = getBits(input);
  for(var i = 0; i < 6; i++ )
  {
    if (directions[i])
    {
//      Debug.Log("TRUTH");
      arrows[i].GetComponent(SpriteRenderer).sprite = arrowSprite;
    }
    else 
    {
      arrows[i].GetComponent(SpriteRenderer).sprite = emptySprite;
    }
  }
//  Debug.Log("Connections: "+input);
}

var updateCounter = 0;
var arrowIndex = 0;
function Update () 
{
  
  updateCounter++;
  if(updateCounter %10 == 0)
  {
    connections++;
    SetArrows(connections%63);
  }
	
}
