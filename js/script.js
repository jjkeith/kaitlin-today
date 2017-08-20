
$( document ).ready( function() {
  $( ".banner" ).load( "./header.html", function() {
    console.log( 'banner loaded' );
  });

});

$( window ).on( 'load',function(){
  console.log( "window loaded ")
  $( ".card__image" ).each( function () {

    if ( $( this ).width() / $( this ).height() >= 1 ) {

      $( this ).addClass( 'card__image--landscape' );

    } else {
      $( this ).addClass( 'card__image--portrait' );
    }

  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-81822884-2', 'auto');
ga('send', 'pageview');
