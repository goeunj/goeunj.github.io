$(document).ready(function() {
  setGlow(0);

  $('#pushbtn').css('pointer-events','all');
  $('#leftbtn').css('pointer-events','all');
  $('#rightbtn').css('pointer-events','all');
  $('#flag').css('pointer-events','all');
  $('#hintbtn').css('pointer-events','all');

  setInterval(() => {
    $('#warning').fadeOut(function () {
      $(this).fadeIn();
    });
  }, 900);

  $('.hint-screen').delay(2000).animate({opacity: 1});

  $('#close-hint').on('click', function(){
    $('.hint-screen').css('display','none');
  })

  $('#hintbtn').on('click', function(){
    $('.hint-screen').css('display', 'block');
    $('.chatbot').css('display', 'none');
    $('.view-projects').css('display', 'none');
  })

  $('#close-btn').on('click', function(){
    $('.warning-popup').remove();
    $('.contact').css('display', 'block');
    $('#pushbtn').css('pointer-events','all');
  })
});