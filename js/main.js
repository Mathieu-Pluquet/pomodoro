
var timer = null
var bonjour =1
var value = $(".resdroite").text()*60


$(".cercle").text(sec(value)).addClass("blue");
$(".cercle").click(function() {
  if ($('#cercle2').hasClass('test')) {
 if (timer !== null) return;
 timer = setInterval(function () {
     value = value-1;
     $(".cercle").text(sec(value))
    //  swap chrono gauche et droit
     if (value == 0 && bonjour==1) {
       value = $(".resgauche").text()*60
       bonjour=2
     }
     if (value == 0 && bonjour==2) {
      value = $(".resdroite").text()*60
      bonjour=1
     }
    //  couleur chrono
     if (bonjour==1){
        $(".cercle").text(sec(value)).css("color","blue");
     }
    if (bonjour==2){
       $(".cercle").text(sec(value)).css("color","red");
     }
     $('#cercle2').removeClass('test')
 }, 1000);
 }
 // stopper le chrono
 else {
      clearInterval(timer);
      timer = null
       $('#cercle2').addClass('test')
    }
});


// compteur gauche break

// bouton moins
$(".moinsgauche").click(function(){
  var resgauche = $(".resgauche").text();
  resgauche = parseInt(resgauche) -1
  $(".resgauche").text(resgauche)
  if ($(".resgauche").text() <1) {
    $(".resgauche").text(1)
  }
  if (bonjour==2) {
    value = $(".resgauche").text()*60
      $(".cercle").text(sec(resgauche*60));
  }
});

// bouton plus
$(".plusgauche").click(function(){
  var resgauche = $(".resgauche").text();
  resgauche = parseInt(resgauche) +1
  $(".resgauche").text(resgauche)
  if (bonjour==2) {
    value = $(".resgauche").text()*60
      $(".cercle").text(sec(resgauche*60));
  }
});

// compteur droit session

// bouton moins
$(".moinsdroite").click(function(){
  var resdroite = $(".resdroite").text();
  resdroite = parseInt(resdroite) -1
  $(".resdroite").text(resdroite)
  if ($(".resdroite").text() <1) {
    $(".resdroite").text(1)
  }

  if (bonjour==1) {
    value = $(".resdroite").text()*60
      $(".cercle").text(sec(resdroite*60));
  }
  clearInterval(timer);
  timer = null
});

// bouton plus
$(".plusdroite").click(function(){
  var resdroite = $(".resdroite").text();
  resdroite = parseInt(resdroite) +1
  $(".resdroite").text(resdroite)
  if (bonjour==1) {
    value = $(".resdroite").text()*60
    $(".cercle").text(sec(resdroite*60));
  }
  clearInterval(timer);
  timer = null
});

// fonction compteur
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
   return  m + ":" + s
}
