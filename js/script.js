imgLibrary = [
  "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_architecturaldigest.png,fl_progressive,g_face,h_450,q_80,w_800/v1478287275/architecturaldigest_what-would-president-donald-trump-s-white-house-look-like.jpg",
  "http://hbu.h-cdn.co/assets/16/19/980x639/gallery-1462816039-donald-trump-1.jpg",
  "http://www.arch2o.com/wp-content/uploads/2016/11/Arch2O-Trump-house-017-600x400.jpg",
  "https://timedotcom.files.wordpress.com/2014/09/time_paulryan_20111205_0519.jpg?quality=85&w=373",
  "https://www.thesun.co.uk/wp-content/uploads/2016/10/nintchdbpict000004431184.jpg"
];

// function gridClassGenerator() {
//   var num = Math.ceil( Math.random() * 3 );
//   return "pure-u-"+num+"-6";
// }

function randomImage() {
  return imgLibrary[ Math.floor( Math.random() * imgLibrary.length ) ];
}

$( document ).ready( function() {
  $( ".banner" ).load( "./header.html", function() {
    console.log( 'banner loaded' );
  } );

  // $( ".container__card").each( function() {
  //   $( ".container__card" ).addClass( gridClassGenerator() );
  // });

  $( "img.card__image[src='']" ).attr( "src", randomImage(), function() {
    console.log( randomImage()() )
  } );

});

