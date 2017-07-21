
var timer = null
var value = 100;
$(".cercle").text(value);
$(".cercle").click(function() {
 if (timer !== null) return;
 timer = setInterval(function () {
     value = value-1;
     $(".cercle").text(value);
 }, 1000);
});

// $("#cercle2").click(function() {
//  clearInterval(timer);
//  timer = null
// });

// compteur gauche

$(".moinsgauche").click(function(){
  var resgauche = $(".resgauche").text();
  resgauche = parseInt(resgauche) -1
  $(".resgauche").text(resgauche)
  if ($(".resgauche").text() <1) {
    $(".resgauche").text(1)
  }
});

$(".plusgauche").click(function(){
  var resgauche = $(".resgauche").text();
  resgauche = parseInt(resgauche) +1
  $(".resgauche").text(resgauche)
});

// compteur droit

$(".moinsdroite").click(function(){
  var resdroite = $(".resdroite").text();
  resdroite = parseInt(resdroite) -1
  $(".resdroite").text(resdroite)
  if ($(".resdroite").text() <1) {
    $(".resdroite").text(1)
  }
});

$(".plusdroite").click(function(){
  var resdroite = $(".resdroite").text();
  resdroite = parseInt(resdroite) +1
  $(".resdroite").text(resdroite)
});
