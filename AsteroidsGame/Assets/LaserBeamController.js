#pragma strict

var laserSpeed:int;

function Start () {

}

function Update () {
	
	transform.Translate(Vector3.up*laserSpeed*Time.deltaTime);

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

	function OnTriggerEnter(Other:Collider)
{
	if (Other.gameObject.tag=="asteroid")
		{
			Destroy(this.gameObject);
			Destroy(Other.gameObject);
			Shipcontroller.score++;
		}
}
			