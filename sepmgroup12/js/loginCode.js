var name="namya";
var pass="sepm12";

function check(){
	var nameIp = document.getElementById("name");
	var passIp = document.getElementById("password");
	var x = document.getElementById("message");
	var y = document.getElementById("blank");

	if(name==nameIp.value && pass==passIp.value)
	{
		x.className="valid";
		y.className="valid";
		window.open("search.html");
	}
	else{
		if(nameIp.value=="" && passIp.value==""){
			y.className="invalid";
			x.className="valid";
		}
		else{
			x.className="invalid";
			y.className="valid";
		}
		return false;
	}
}