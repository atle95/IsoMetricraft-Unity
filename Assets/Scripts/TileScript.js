#pragma strict

var rectTrans : RectTransform;
var pivot;
var title;
//var neighbors : [] GameObject;

function Start () 
{
  pivot = Vector2(0.5f,0.75f);
  rectTrans.pivot = pivot;
  	
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

function OnMouseEnter () {
//  Debug.Log(title);
//    rend.material.color = Color.red;
}

// ...the red fades out to cyan as the mouse is held over...
function OnMouseOver () {
//    rend.material.color -= Color(0.1, 0, 0) * Time.deltaTime;
}


// ...and the mesh finally turns white when the mouse moves away.
function OnMouseExit () {
//    rend.material.color = Color.white;
}

function Update () {
  pivotInPlace(1);
//  if(Input.GetMouseButtonDown(0))
//        Debug.Log(title);
//    if(Input.GetMouseButtonDown(1))
//        Debug.Log("Pressed right click.");
//    if(Input.GetMouseButtonDown(2))
//        Debug.Log("Pressed middle click.");	
}
