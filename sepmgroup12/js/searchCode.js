var products = ["firstdomain.com","seconddomain.com","thirdname.in"];
var productType = ["premium","live","normal"];

function check(){
	var nameIp = document.getElementById("dominName");
	var flag = 0;
	var idx = -1;
	var i=0;
	for(i=0;i<products.length;i++)
	{
		if(nameIp.value == products[i])
		{
			flag=1;
			idx=i;
		}
	}

	if(nameIp.value == "")
	{
		document.getElementById("message").innerHTML = "Invalid Entry";
		return false;
	}
	else
	{
		if(flag == 1)
		{
			if(productType[idx] == "normal")
			{
				document.getElementById("message").innerHTML = "";
				alert("Here are all the domains matching to the domain name you are searching for.");				
			}
			else if (productType[idx] == "live")
			{
				document.getElementById("message").innerHTML = "";
				alert("The domain you are searching for is already sold and acts as a live website.");
			}
			else (productType[idx] == "premium")
			{
				document.getElementById("message").innerHTML = "";
				alert("The domain you are searching for is a Premium Domain.");
			}
		}
		else
		{
			document.getElementById("message").innerHTML = "The name might have been Mis-spelled. Please check again.";
			return false;
		}
	}
}