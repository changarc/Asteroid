#pragma strict
var rotationspeed : float;

function Start () {

	rotationspeed = Random.Range(80,20.0);

}

function Update () {

	transform.Rotate(Vector3.forward * rotationspeed * Time.deltaTime);

}