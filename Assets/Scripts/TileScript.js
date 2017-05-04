#pragma strict

var rectTrans : RectTransform;
var pivot;
var title;
public var sprites   : Sprite[];

//var neighbors : [] GameObject;

function Start () 
{
//  pivot = Vector2(0.5f,0.75f);
//  rectTrans.pivot = pivot;
  SetSprite(2);
  	
}

function logName(nameInput)
{
  title = nameInput;
//  Debug.Log(nameInput);
}

function pivotInPlace (degrees)
{
//  rectTrans.pivot = new Vector2(0.5f, 0.75f);
//  rectTrans.Rotate(180);
//  Debug.Log("Pivot In Place");
  rectTrans.GetComponent(Transform).Rotate(0,0,degrees);

}

function SetSprite(input : int)
{ 
  this.spriteIndex = input;
  this.GetComponent(SpriteRenderer).sprite = sprites[input];
}

var counter = 0;
var spriteIndex = 0;
function Update () {
  counter++;
  if(counter % 20 == 0)
  {
    pivotInPlace(120);
    spriteIndex++;
//    spriteIndex = (spriteIndex % 2) + 1;

    SetSprite(spriteIndex % sprites.length);
  }
//  if(Input.GetMouseButtonDown(0))
//        Debug.Log(title);
//    if(Input.GetMouseButtonDown(1))
//        Debug.Log("Pressed right click.");
//    if(Input.GetMouseButtonDown(2))
//        Debug.Log("Pressed middle click.");	
}
