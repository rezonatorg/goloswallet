steem.api.setOptions({ url: 'wss://api.golos.cf' });
steem.config.set('address_prefix','GLS');
steem.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');

var BUTT = document.querySelector("a.trans");
BUTT.addEventListener("click", function( event ) {
var  wif= document.getElementById("wif").value;
var  sender= document.getElementById("sender").value.toLocaleLowerCase().trim();
var  pol= document.getElementById("pol").value.toLocaleLowerCase().trim();
var  mone= document.getElementById("mone").value;
var  memo= document.getElementById("memo").value;
var  gog= document.getElementById("gog").value;

steem.broadcast.transfer(wif, sender, pol, mone + ' ' + gog, memo, function(err, result) {
  console.log(err, result);
   if(result) { 
 console.log(result);
  document.getElementById('urra').innerHTML = "<div class='yeah'><h2>УСПЕШНО!</h2></div>";
   } else{ 
   document.getElementById('urra').innerHTML = "<div class='nono'><h2>ОШИБКА!</h2></div>";
  }
    setTimeout(function(err, result) { 
	   document.getElementById('urra').innerHTML = "<div class='err'></div>";                        
		}, 10000 ); 
} );
});
