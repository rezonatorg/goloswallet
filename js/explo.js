var NUTT = document.querySelector("a.check");
NUTT.addEventListener("click", function( event ) {
var  accou= document.getElementById("nikky").value.toLocaleLowerCase().trim();

var socket = new WebSocket('wss://api.golos.cf'), rez;

socket.onopen = function(event) {
	   socket.send(JSON.stringify({ 
            id: 1,
             method: 'get_accounts',
            'params': [[accou]]
        }));                             
};
socket.onmessage = function(event) {
		data = JSON.parse(event.data);
	rez = data.result[0]; // Та самая переменная, которую мы добавили
	$login = rez.name;
	$sbd = rez.sbd_balance;
	$gol = rez.balance;
console.log(rez); // Укажем переменную в лог консоли, что бы проверить все ли верно
				document.getElementById('result').innerHTML = $login;
				document.getElementById('ssss').innerHTML = $sbd;
				document.getElementById('balu').innerHTML = $gol;
								 };
   });
