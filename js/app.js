var TIMEOUT = 8000;
var interval = setInterval(handleNext, TIMEOUT);
function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);
  }
}

// Collapsable navigation
 $( document ).ready(function() {
  console.log( "ready!" );
  var stickyNavTop = $('.navHeader').offset().top;
  var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
  $('.navHeader').addClass('sticky');
} else {
  $('.navHeader').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
  stickyNav();
});

function closeBurger() {
$(".menu").slideToggle("slow", function() {
  $(".hamburger").show();
});
};

$(".menu").hide();
$(".hamburger").click(function() {
$(".menu").slideToggle("slow", function() {
  $(".hamburger").show();
});
});

setTimeout(5000, function() {
  $('#myModal').dialog('show');
});

});

$(window).on('load', function() {
        $('#myModal').modal('show');
    });
