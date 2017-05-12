#pragma strict

var speed        : float;
var walkingSpeed : float;
var sprintSpeed  : float;

var jumping    : boolean;
var facingLeft : boolean = false;
var grounded   : boolean = true;


function Start ()
{
	
}

function Update ()
{



 var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
// if (Input.GetKeyDown ("space")) {
//   speed = sprintSpeed;
// } 
// if(Input.GetKeyUp("space")) {
//   speed = walkingSpeed;
// }

   transform.position += move * speed * Time.deltaTime;
//   Debug.Log("SPACEBAR");
// UnityEngine.Component.
// camera.transform.position = transform.position;
}
