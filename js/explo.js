var NUTT = document.querySelector("a.check");
NUTT.addEventListener("click", function( event ) {
var  accou= document.getElementById("nikky").value.toLocaleLowerCase().trim();


steem.api.getAccounts([accou], function(err, result) {
	
	
	rez = result[0];
	$login = rez.name;
	$sbd = rez.sbd_balance;
	$gol = rez.balance;
console.log(rez);
				document.getElementById('result').innerHTML = $login;
				document.getElementById('ssss').innerHTML = $sbd;
				document.getElementById('balu').innerHTML = $gol;
	
	
});
});