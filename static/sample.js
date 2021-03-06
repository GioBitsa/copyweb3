

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


// pricing carousel


let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.slide-items');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();



// feature carousel


let isDown2 = false;
let startX2;
let scrollLeft2;
const slider2 = document.querySelector('.slide-items2');

const end2 = () => {
	isDown2 = false;
  slider2.classList.remove('active');
}

const start2 = (e) => {
  isDown2 = true;
  slider2.classList.add('active');
  startX2 = e.pageX || e.touches[0].pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;	
}

const move2 = (e) => {
	if(!isDown2) return;

  e.preventDefault();
  const x2 = e.pageX || e.touches[0].pageX - slider2.offsetLeft;
  const dist2 = (x2 - startX2);
  slider2.scrollLeft = scrollLeft2 - dist2;
}

(() => {
	slider2.addEventListener('mousedown', start2);
	slider2.addEventListener('touchstart', start2);

	slider2.addEventListener('mousemove', move2);
	slider2.addEventListener('touchmove', move2);

	slider2.addEventListener('mouseleave', end2);
	slider2.addEventListener('mouseup', end2);
	slider2.addEventListener('touchend', end2);
})();



// hero scrolling effect

$(document).ready(function () {
  var $horizontal = $('.hero-img');

  $(window).scroll(function () {
      var s = $(this).scrollTop(),
          d = $(document).height(),
          c = $(this).height();

      scrollPercent = (s / (d - c));

      var position = (scrollPercent * ($(document).width() + 20 * $horizontal.width()));
      
      $horizontal.css({
          'right': position
      });
  });
});


// how it works slide 

$(window).scroll(function(){
  if($(window).scrollTop() > $('#how-it-works').offset().top && $(window).scrollTop() + $(window).height()/2 < $('#how-it-works').offset().top + $('#how-it-works').height()){
    $('#how-it-works-slider').css('position', 'fixed');
    $('#how-it-works-slider').css('top', '20%');
  }else{
    $('#how-it-works-slider').css('position', 'relative');
    $('#how-it-works-slider').css('top', '0');
  }
})


// services slide 

$(window).scroll(function(){
  if($(window).width < 650){
    if($(window).scrollTop() > $('#services').offset().top && $(window).scrollTop() < $('#services').offset().top + $('#services').height()){
      $('#services-header').css('position', 'fixed');
      $('#services-header').css('top', '20%');
    }else{
      $('#services-header').css('position', 'absolute');
      $('#services-header').css('top', '0');
    }
  }
})


// hero text animation

$(window).scroll(function(){
  if($(window).scrollTop() < 800){
    if($('.js-h-txt-1').hasClass('animate-text')){
      $('.js-h-txt-1').removeClass('animate-text')
    }
    $('.js-h-txt-2').addClass('animate-text')
    $('.js-h-txt-3').addClass('animate-text')
  }else if($(window).scrollTop() < 1600){
    $('.js-h-txt-1').addClass('animate-text')
    if($('.js-h-txt-2').hasClass('animate-text')){
      $('.js-h-txt-2').removeClass('animate-text')
    }
    $('.js-h-txt-3').addClass('animate-text')
  }else{
    $('.js-h-txt-2').addClass('animate-text')
    if($('.js-h-txt-3').hasClass('animate-text')){
      $('.js-h-txt-3').removeClass('animate-text')
    }
  }
})



// how it works nav button

$(".js-hiw-link-1").click(function() {
  $('html, body').animate({
    scrollTop: $("#hiw-1").offset().top - $(window).height()/2
  }, 100);
  checkActive($(".js-hiw-link-1"))
});
$(".js-hiw-link-2").click(function() {
  $('html, body').animate({
    scrollTop: $("#hiw-2").offset().top - $(window).height()/2
  }, 100);
  checkActive($(".js-hiw-link-2"))
});
$(".js-hiw-link-3").click(function() {
  $('html, body').animate({
    scrollTop: $("#hiw-3").offset().top - $(window).height()/2
  }, 100);
  checkActive($(".js-hiw-link-3"))
});
$(".js-hiw-link-4").click(function() {
  $('html, body').animate({
    scrollTop: $("#hiw-4").offset().top - $(window).height()/2
  }, 100);
  checkActive($(".js-hiw-link-4"))
});
$(".js-hiw-link-5").click(function() {
  $('html, body').animate({
    scrollTop: $("#hiw-5").offset().top - $(window).height()/2
  }, 100);
  checkActive($(".js-hiw-link-5"))
});
$(".js-hiw-link-6").click(function() {
  $('html, body').animate({
    scrollTop: $("#hiw-6").offset().top - $(window).height()/2
  }, 100);
  checkActive($(".js-hiw-link-6"))
});

function checkActive(target){
  $('.hiw-nav-list__btn').each(function(){
    if($(".hiw-nav-list__btn").hasClass("is-active")){
      $(".hiw-nav-list__btn").removeClass("is-active")
    }
  })
  target.addClass("is-active")
}
