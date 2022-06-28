
var x = prompt("How many lotto numbers would you like to generate?");

function lottoFunc()
{
	
	var lotto = [];
	var picks = "";

	for (var i = 0; i < x; i++)
	{
		lotto[i] = Math.ceil(Math.random() * 99);
	}	


	for (var i = 0; i < lotto.length; i++)
	{
		if (i == 0) 
		{
			picks += lotto[i];
		}
		else 
		{
			picks += "-" + lotto[i];
		}
	}

	document.getElementById("display").innerText = picks;
}

