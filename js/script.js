imgLibrary = [
  "http://hbu.h-cdn.co/assets/16/19/980x490/landscape-1462813673-donald-trump-index.jpg",
  "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_architecturaldigest.png,fl_progressive,g_face,h_450,q_80,w_800/v1478287275/architecturaldigest_what-would-president-donald-trump-s-white-house-look-like.jpg",
  "http://hbu.h-cdn.co/assets/16/19/980x639/gallery-1462816039-donald-trump-1.jpg",
  "http://www.arch2o.com/wp-content/uploads/2016/11/Arch2O-Trump-house-017-600x400.jpg",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5ReXCa0dw1c%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5ReXCa0dw1c&docid=Og_cS3eYNvCmLM&tbnid=GLWPgk05mGFDbM%3A&vet=10ahUKEwic7KnqpcvVAhVJ2GMKHQx7DvgQMwg_KAMwAw..i&w=1280&h=720&bih=868&biw=1686&q=donald%20trump%20house&ved=0ahUKEwic7KnqpcvVAhVJ2GMKHQx7DvgQMwg_KAMwAw&iact=mrc&uact=8",
  "https://i.imgur.com/VT3oprI.jpg",
  "https://timedotcom.files.wordpress.com/2014/09/time_paulryan_20111205_0519.jpg?quality=85&w=373",
  "http://www.technologytell.com/entertainment/files/2014/05/4QRhRJm.gif",
  "https://media.giphy.com/media/KZn6uQiZhLAoE/giphy.gif",
  "https://i1.wp.com/24.media.tumblr.com/d61001e9324c71ac6b4af327dec84825/tumblr_mish1yoP7o1rb2l1co1_400.gif",
  "https://az616578.vo.msecnd.net/files/2015/12/20/635862520923613463-787800161_0_8e5ac_.gif",
  "https://www.thesun.co.uk/wp-content/uploads/2016/10/nintchdbpict000004431184.jpg?w=960&strip=all"
];

function gridClassGenerator() {
  var num = Math.ceil( Math.random() * 6 );
  var quotient = num / 6;
  switch( quotient ) {
    case( 1 ):
    case( 0.5 ):
      return "pure-u-1-2";
    case( 1/3 ):
      return "pure-u-1-3";
    case( 2/3 ):
      return "pure-u-2-3";
    default:
      return "pure-u-"+num+"-6";
  }
}

function randomImage() {
  return imgLibrary[ Math.ceil( Math.random() * imgLibrary.length ) ];
}

$( document ).ready( function() {
  $( ".banner" ).load( "./header.html", function() {
    console.log( 'banner loaded' );
  } );

  $( ".container__card").each( function() {
    $( ".container__card" ).addClass( gridClassGenerator() );
  });

  $( "img.card__image[src='']" ).attr( "src", randomImage() );

});

