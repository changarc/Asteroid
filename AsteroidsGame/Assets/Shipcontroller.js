#pragma strict
var speed:int;
var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;

function Start () {

}

function Update () {

	transform.Translate(Vector3.up * speed * Time.deltaTime * Input.GetAxis("Vertical"));
	transform.Rotate(Vector3.forward * 150 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	 transform.Translate(Vector3.up*speed*Time.deltaTime*Input.GetAxis("Vertical"));
 transform.Rotate(Vector3.forward*20*Time.deltaTime*Input.GetAxis("Horizontal"));
 
 if (transform.position.x > (Border_Controller.rightmost-1))
{
	transform.position.x = (Border_Controller.leftmost+1);

}
if (transform.position.x < (Border_Controller.leftmost+1))
{
	transform.position.x = (Border_Controller.rightmost-1);

}
//y coordinates
if (transform.position.y > (Border_Controller.topmost-1))
{
	transform.position.y = (Border_Controller.bottommost+1);

}
if (transform.position.y < (Border_Controller.bottommost+1))
{
	transform.position.y = (Border_Controller.topmost-1);

}

}

	speed = 5;
	if (Input.GetKeyDown(KeyCode.Space))
	{
		speed = 50;
	}