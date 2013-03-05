#pragma strict
var speed:int;
var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;
var laserBeam:Rigidbody;
var lives:int;
static var score:int;


function Start () {

}


function OnGUI () {
	GUI.Label(Rect(2,2,200,25),"Lives: "+lives);
	GUI.Label(Rect(2,27,200,25),"Score: "+score);
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



	speed = 5;
	if (Input.GetKey(KeyCode.Space))
	{
		speed = 50;
	}
	
	if (Input.GetKeyDown(KeyCode.Z))
	{
	print("shoot");
	Instantiate(laserBeam,transform.position, transform.rotation);
	}
	
}

	function OnTriggerEnter(Other:Collider)
{
	if (Other.gameObject.tag=="asteroid")
		{
			lives--;
			if (lives == 0)
		{
			Destroy(this.gameObject);
		}
		}
}