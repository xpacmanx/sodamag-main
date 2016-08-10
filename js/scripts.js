$(function(){

  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  setInterval(function(){
    if ($('.crsl li.girl1').hasClass('active')) {
      $('.crsl li.girl1').removeClass('active');
      $('.crsl li.girl2').addClass('active animated fadeIn').one(animationEnd, function() {
        $('.crsl li.girl2').removeClass('animated fadeIn');
      });
    } else {
      $('.crsl li.girl2').removeClass('active');
      $('.crsl li.girl1').addClass('active animated fadeIn').one(animationEnd, function() {
        $('.crsl li.girl1').removeClass('animated fadeIn');
      });;
    };
  }, 5000);

  $('.backcall-btn').click(function(){
    $('.fixed').addClass('active animated bounceInDown');
    yaCounter37163650.reachGoal('BACKCALL');
  });

  $('.totop').click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
  });

  $('.fixed .close-btn').click(function(){
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

     $('.fixed').removeClass('animated bounceInDown');
     $('.fixed').addClass('animated bounceOutUp').one(animationEnd, function() {
       $('.fixed').removeClass('animated bounceOutUp active');
   });

  });

  // $('.menu-btn').click(function(){
  //   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  //     $('.menu').css({'display':'block'}).addClass('animated bounceInDown').one(animationEnd, function() {
  //       $('.menu').removeClass('animated bounceInDown');
  //   });
  // });
  // $('.menu-btn2').click(function(){
  //    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  //    var el = $(this).parent();
  //     $(this).parent().addClass('animated bounceOutUp').one(animationEnd, function() {
  //       el.removeClass('animated bounceOutUp').css({'display':'none'});
  //   });;
  // });

  $('.reg1').click(function(){
    $('#register1').slideDown();
    $('body,html').animate({
        scrollTop: $("#register1").offset().top
    }, 400);
  });
  $('.reg2').click(function(){
    $('#register2').slideDown();
    $('body,html').animate({
        scrollTop: $("#register2").offset().top
    }, 400);
  });

  $('#register1 form').submit(function(){

    if ($('#register1 form input[name="fio"]').val().length < 1) {
      $('#register1 form input[name="fio"]').css({'border-bottom':'#da462b solid 2px'});
      $('#register1 form input[name="fio"]').attr({'placeholder':'ЗАПОЛНИТЕ ИМЯ'});
      yaCounter37163650.reachGoal('REGISTERFAIL');
      return false;
    } else {
      $('#register1 form input[name="fio"]').css({'border-bottom':'rgb(103, 128, 71) solid 1px'});
    }

    if ($('#register1 form input[name="tel"]').val().length < 1) {
      $('#register1 form input[name="tel"]').css({'border-bottom':'#da462b solid 2px'});
      $('#register1 form input[name="tel"]').attr({'placeholder':'ЗАПОЛНИТЕ НОМЕР ТЕЛЕФОНА'});
      yaCounter37163650.reachGoal('REGISTERFAIL');
      return false;
    } else {
      $('#register1 form input[name="tel"]').css({'border-bottom':'rgb(103, 128, 71) solid 1px'});
    }

    yaCounter37163650.reachGoal('REGISTERWIN');

  })

  $('#register2 form').submit(function(){

    if ($('#register2 form input[name="fio"]').val().length < 1) {
      $('#register2 form input[name="fio"]').css({'border-bottom':'#da462b solid 2px'});
      $('#register2 form input[name="fio"]').attr({'placeholder':'ЗАПОЛНИТЕ ИМЯ'});
      yaCounter37163650.reachGoal('REGISTERFAIL');
      return false;
    } else {
      $('#register2 form input[name="fio"]').css({'border-bottom':'rgb(103, 128, 71) solid 1px'});
    }

    if ($('#register2 form input[name="tel"]').val().length < 1) {
      $('#register2 form input[name="tel"]').css({'border-bottom':'#da462b solid 2px'});
      $('#register2 form input[name="tel"]').attr({'placeholder':'ЗАПОЛНИТЕ НОМЕР ТЕЛЕФОНА'});
      yaCounter37163650.reachGoal('REGISTERFAIL');
      return false;
    } else {
      $('#register2 form input[name="tel"]').css({'border-bottom':'rgb(103, 128, 71) solid 1px'});
    }

    yaCounter37163650.reachGoal('REGISTERWIN');

  });

  $('#register3 form').submit(function(){

    if ($('#register3 form input[name="fio"]').val().length < 1) {
      $('#register3 form input[name="fio"]').css({'border-bottom':'#da462b solid 2px'});
      $('#register3 form input[name="fio"]').attr({'placeholder':'ЗАПОЛНИТЕ ИМЯ'});
      yaCounter37163650.reachGoal('REGISTERFAIL');
      return false;
    } else {
      $('#register3 form input[name="fio"]').css({'border-bottom':'rgb(103, 128, 71) solid 1px'});
    }

    if ($('#register3 form input[name="tel"]').val().length < 1) {
      $('#register3 form input[name="tel"]').css({'border-bottom':'#da462b solid 2px'});
      $('#register3 form input[name="tel"]').attr({'placeholder':'ЗАПОЛНИТЕ НОМЕР ТЕЛЕФОНА'});
      yaCounter37163650.reachGoal('REGISTERFAIL');
      return false;
    } else {
      $('#register3 form input[name="tel"]').css({'border-bottom':'rgb(103, 128, 71) solid 1px'});
    }

    yaCounter37163650.reachGoal('REGISTERWIN');

  });

  $(window).bind('scroll',function(e){
    animIn();
  });
  function animIn(){
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    var scrolled = $(window).scrollTop();
    console.log(scrolled);
    if ( scrolled >= ($(".block2").offset().top - 500) ) {
          $('.block2 .anim').eq(0).addClass('animated zoomIn visible');
          setTimeout(function(){$('.block2 .anim').eq(1).addClass('animated zoomIn visible')}, 300);
          setTimeout(function(){$('.block2 .anim').eq(2).addClass('animated zoomIn visible')}, 600);
    }
  }

});
