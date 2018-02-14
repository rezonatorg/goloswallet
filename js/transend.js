var BUTT = document.querySelector("a.trans");
BUTT.addEventListener("click", function( event ) {
var  wif= document.getElementById("wif").value;
var  sender= document.getElementById("sender").value.toLocaleLowerCase().trim();
var  pol= document.getElementById("pol").value.toLocaleLowerCase().trim();
var  mone= document.getElementById("mone").value;
var  memo= document.getElementById("memo").value;
var  gog= document.getElementById("gog").value;
var bbb = Math.round(mone*1000)/1000;;
var vvv= bbb.toFixed(3)

steem.broadcast.transfer(wif, sender, pol, vvv + ' ' + gog, memo, function(err, result) {
  console.log(err, result);
   if(result) { 
 console.log(result);
  document.getElementById('urra').innerHTML = "<div class='yeah'><h2>УСПЕШНО!</h2></div>";
   } else{ 
   document.getElementById('urra').innerHTML = "<div class='nono'><h2>ОШИБКА!</h2></div>";
  }
    setTimeout(function(err, result) { 
	   document.getElementById('urra').innerHTML = "<div class='err'></div>";                        
		}, 7000 ); 
} );
});