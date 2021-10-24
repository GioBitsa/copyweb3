

// intro background image transition

const intro = document.getElementsByClassName('js-intro');
const introBg = document.getElementsByClassName('js-intro__bg')

$(window).scroll(function() {
    var bottomPos = $(window).scrollTop() + $(window).height();
    var introPos = $(intro).position().top;
    if (bottomPos >= introPos) {
        $(introBg).css('opacity', '1');
    }else {
        $(introBg).css('opacity', '0');
    }
}).scroll();



// intro video

$('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
    $('#figureVideo').get(0).pause();
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
    $('#figureVideo').get(0).play();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };