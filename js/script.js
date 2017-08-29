// TODO add fade effect to decks

var decks = [
  "Life is like a box of racist chocolates",
  "Maybe something good happened?",
  "The Simpsons predicted this in 2000",
  "At least there is a today!",
  "The Romans survived Caligula... for a bit",
  "A minute portion of the news that's fit to print",
  "Merkel's got this. Right?",
  "Ignorance is bliss, but in a dumb way",
  "Political stability is overrated?"
];

$( document ).ready( function() {
  $( ".banner" ).load( "./header.html" );

});

function changeDeck() {
  $( ".banner__subtitle" ).text( decks[ Math.floor ( Math.random(  ) * decks.length )] );
}

$( window ).on( 'load',function(){
  $( ".card__image" ).each( function () {

    if ( $( this ).width() / $( this ).height() >= 1 ) {

      $( this ).addClass( 'card__image--landscape' );

    } else {
      $( this ).addClass( 'card__image--portrait' );
    }
    setInterval( changeDeck, 15000 );
  });
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-81822884-2', 'auto');
ga('send', 'pageview');
