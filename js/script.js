
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
