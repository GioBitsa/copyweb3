

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


// talent videos

// first video
$('#play-video2').on('click', function(e){
  e.preventDefault();
  $('#video-overlay2').addClass('open');
  $("#video-overlay2").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#figureVideo2').get(0).pause();
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
  $('#figureVideo2').get(0).play();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// second video
$('#play-video3').on('click', function(e){
  e.preventDefault();
  $('#video-overlay3').addClass('open');
  $("#video-overlay3").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#figureVideo3').get(0).pause();
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
  $('#figureVideo3').get(0).play();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// third video
$('#play-video4').on('click', function(e){
  e.preventDefault();
  $('#video-overlay4').addClass('open');
  $("#video-overlay4").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#figureVideo4').get(0).pause();
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
  $('#figureVideo4').get(0).play();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};



// fourth video
$('#play-video5').on('click', function(e){
  e.preventDefault();
  $('#video-overlay5').addClass('open');
  $("#video-overlay5").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#figureVideo5').get(0).pause();
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
  $('#figureVideo5').get(0).play();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};




// pricing videos


// first video
$('#pricing-video1').on('click', function(e){
  e.preventDefault();
  $('#pricing-overlay1').addClass('open');
  $("#pricing-overlay1").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#modalBtn').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_pricing_overlay1();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_pricing_overlay1() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#modalBtn').removeClass('open');
};


// second video
$('#pricing-video2').on('click', function(e){
  e.preventDefault();
  $('#pricing-overlay2').addClass('open');
  $("#pricing-overlay2").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#modalBtn2').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_pricing_overlay2();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_pricing_overlay2() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#modalBtn2').removeClass('open');
};


// third video
$('#pricing-video3').on('click', function(e){
  e.preventDefault();
  $('#pricing-overlay3').addClass('open');
  $("#pricing-overlay3").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#modalBtn3').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_pricing_overlay3();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_pricing_overlay3() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#modalBtn3').removeClass('open');
};



// featured work videos 

// first video
$('#feature-video1').on('click', function(e){
  e.preventDefault();
  $('#feature-overlay1').addClass('open');
  $("#feature-overlay1").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#featureModalBtn1').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_overlay1();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_overlay1() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#featureModalBtn1').removeClass('open');
};


// second video
$('#feature-video2').on('click', function(e){
  e.preventDefault();
  $('#feature-overlay2').addClass('open');
  $("#feature-overlay2").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#featureModalBtn2').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_overlay2();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_overlay2() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#featureModalBtn2').removeClass('open');
};


// third video
$('#feature-video3').on('click', function(e){
  e.preventDefault();
  $('#feature-overlay3').addClass('open');
  $("#feature-overlay3").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#featureModalBtn3').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_overlay3();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_overlay3() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#featureModalBtn3').removeClass('open');
};


// fourth video
$('#feature-video4').on('click', function(e){
  e.preventDefault();
  $('#feature-overlay4').addClass('open');
  $("#feature-overlay4").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#featureModalBtn4').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_overlay4();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_overlay4() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#featureModalBtn4').removeClass('open');
};


// fifth video
$('#feature-video5').on('click', function(e){
  e.preventDefault();
  $('#feature-overlay5').addClass('open');
  $("#feature-overlay5").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#featureModalBtn5').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_overlay5();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_overlay5() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#featureModalBtn5').removeClass('open');
};


// sixth video
$('#feature-video6').on('click', function(e){
  e.preventDefault();
  $('#feature-overlay6').addClass('open');
  $("#feature-overlay6").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#featureModalBtn6').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_overlay6();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_overlay6() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#featureModalBtn6').removeClass('open');
};


// seventh video
$('#feature-video7').on('click', function(e){
  e.preventDefault();
  $('#feature-overlay7').addClass('open');
  $("#feature-overlay7").append('<iframe width="560" height="315" src="https://player.vimeo.com/external/619469672.hd.mp4?s=b25c337fcf733f24f80eae58749f799370624073&amp;profile_id=175" frameborder="0" allowfullscreen></iframe>');
  $('#featureModalBtn7').addClass('open');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_overlay7();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_overlay(); }
});

function close_overlay7() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
  $('#featureModalBtn7').removeClass('open');
};



// carousels

// pricing carousel
