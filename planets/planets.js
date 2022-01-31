const planets = ['#lemon_layer', '#track_layer', '#cal_layer', '#shape_layer'];
const view_prj = ['.lemon_farm', '.covid_tracker', '.Calendar', '.shape_tracker'];
var planet_index = 0;

var prevPlanet;

function setGlow(prev){
  clearInterval(prevPlanet);
  $(planets[prev]).css({'filter':'brightness(0.0)'});

  $(planets[planet_index]).css({'filter':'brightness(0.5)'});
  prevPlanet = setInterval(() => {
    $(planets[planet_index]).fadeOut(function () {
      $(this).fadeIn();
    });
  }, 400);
}

function pushBtn(){
  $('#pushbtn').attr('src', './images/pushed.png');
  setTimeout(()=>{
    $('#pushbtn').attr('src', './images/push.png');
  }, 350);

  $('#pushbtn').css('pointer-events','none');
  $('#rightbtn').css('pointer-events', 'none');
  $('#leftbtn').css('pointer-events', 'none');

  /*open each form for each planet using planet_index*/
  $('.view-projects').css('display', 'block');
  $(view_prj[planet_index]).css('display', 'block');

  /*assign clicked*/
  $(view_prj[planet_index]).attr('id', 'clicked');
  checkClicked();
}

// once all projects are looked at, show contact info
function checkClicked(){
  var count = 0;
  for(var i=0; i<planets.length; i++){
    if($(view_prj[i]).is('#clicked')){
      count++;
    }
  }

  if($('#contact_info').is('.shown')){
    count++;
  }else if(count == 2){
    setTimeout(function(){
      $('.view-projects').css('display', 'none');
      $(view_prj[planet_index]).css('display', 'none');
      $('.warning-popup').css('display','block');
      $('#contact_info').attr('class', 'shown');
    }, 2500);
  }
}

function leftBtn(){
  var prev = planet_index;
  if(planet_index == 0){
    planet_index = planets.length-1;
  }else if(planet_index > 0){
    planet_index--;
  }

  $('#leftbtn').css('transform', 'rotate(-25deg)');
  setTimeout(()=>{
    $('#leftbtn').css('transform', '');
  }, 300);

  setGlow(prev);
}

function rightBtn(){
  var prev = planet_index;
  if(planet_index == planets.length-1){
    planet_index = 0;
  }else if(planet_index < planets.length-1){
    planet_index++;
  }

  $('#rightbtn').css('transform', 'rotate(25deg)');
  setTimeout(()=>{
    $('#rightbtn').css('transform', '');
  }, 300);

  setGlow(prev);
}

$(window).on('load', function(){
  $('#close-view').on('click', function(){
    $('.view-projects').css('display', 'none');
    $(view_prj[planet_index]).css('display', 'none');

    $('#lemon_vid').get(0).pause();
    $('#lemon_vid').get(0).currentTime = 0;

    $('#pushbtn').css('pointer-events','all');
    $('#rightbtn').css('pointer-events','all');
    $('#leftbtn').css('pointer-events','all');
  })

  $('#image').on('click', function(){
    $('#image').addClass('active');
    $('.popup-overlay').addClass('active');
    $('#close-popup').css('display', 'block');
  })
  $('#image1').on('click', function(){
    $('#image1').addClass('active');
    $('.popup-overlay1').addClass('active');
    $('#close-popup1').css('display', 'block');
  })
  $('#image2').on('click', function(){
    $('#image2').addClass('active');
    $('.popup-overlay2').addClass('active');
    $('#close-popup2').css('display', 'block');
  })
  $('#image3').on('click', function(){
    $('#image3').addClass('active');
    $('.popup-overlay3').addClass('active');
    $('#close-popup3').css('display', 'block');
  })
  $('#image4').on('click', function(){
    $('#image4').addClass('active');
    $('.popup-overlay4').addClass('active');
    $('#close-popup4').css('display', 'block');
  })
  $('#image5').on('click', function(){
    $('#image5').addClass('active');
    $('.popup-overlay5').addClass('active');
    $('#close-popup5').css('display', 'block');
  })

  $('#close-popup').on('click', function(){
    $('#image').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('#close-popup').css('display', 'none');
  })
  $('#close-popup1').on('click', function(){
    $('#image1').removeClass('active');
    $('.popup-overlay1').removeClass('active');
    $('#close-popup1').css('display', 'none');
  })
  $('#close-popup2').on('click', function(){
    $('#image2').removeClass('active');
    $('.popup-overlay2').removeClass('active');
    $('#close-popup2').css('display', 'none');
  })
  $('#close-popup3').on('click', function(){
    $('#image3').removeClass('active');
    $('.popup-overlay3').removeClass('active');
    $('#close-popup3').css('display', 'none');
  })
  $('#close-popup4').on('click', function(){
    $('#image4').removeClass('active');
    $('.popup-overlay4').removeClass('active');
    $('#close-popup4').css('display', 'none');
  })
  $('#close-popup5').on('click', function(){
    $('#image5').removeClass('active');
    $('.popup-overlay5').removeClass('active');
    $('#close-popup5').css('display', 'none');
  })
  
})