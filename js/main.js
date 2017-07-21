
var timer = null
var bonjour =1
var value = $(".resdroite").text()*60
$(".cercle").text(sec(value));
$(".cercle").click(function() {
 if (timer !== null) return;
 timer = setInterval(function () {
     value = value-1;
     $(".cercle").text(sec(value));
     if (value == 0 && bonjour==1) {
       value = $(".resgauche").text()*60
       bonjour=2
     }
     if (value == 0 && bonjour==2) {
      value = $(".resdroite").text()*60
      bonjour=1
     }
 }, 1000);
});

// $("#cercle2").click(function() {
 // clearInterval(timer);
 // timer = null
// });

// compteur gauche

$(".moinsgauche").click(function(){
  var resgauche = $(".resgauche").text();
  resgauche = parseInt(resgauche) -1
  $(".resgauche").text(resgauche)
  if ($(".resgauche").text() <1) {
    $(".resgauche").text(1)
  }
  value = $(".resgauche").text()*60
});

$(".plusgauche").click(function(){
  var resgauche = $(".resgauche").text();
  resgauche = parseInt(resgauche) +1
  $(".resgauche").text(resgauche)
  value = $(".resgauche").text()*60
});

// compteur droit

$(".moinsdroite").click(function(){
  var resdroite = $(".resdroite").text();
  resdroite = parseInt(resdroite) -1
  $(".resdroite").text(resdroite)
  if ($(".resdroite").text() <1) {
    $(".resdroite").text(1)
  }
  $(".cercle").text(sec(resdroite*60));
  value = $(".resdroite").text()*60
  clearInterval(timer);
  timer = null
});

$(".plusdroite").click(function(){
  var resdroite = $(".resdroite").text();
  resdroite = parseInt(resdroite) +1
  $(".resdroite").text(resdroite)
  $(".cercle").text(sec(resdroite*60));
  value = $(".resdroite").text()*60
  clearInterval(timer);
  timer = null
});

function sec(d) {
   d = Number(d);
   var m = Math.floor(d % 3600 / 60);
   var s = Math.floor(d % 3600 % 60);
   if( m <10){
     m = "0" + m
   }
   if(s<10){
     s = "0" + s
   }
   return m + ":" + s
}
