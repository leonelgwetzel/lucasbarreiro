$(window).scroll(function(){
    const top = $('#nav-info').height();
    var scroll = $(window).scrollTop();
    if(scroll > top){
      $('.navbar').addClass("fixed-top");
      $('.navbar-brand').removeClass("d-none");
    } else{
      $('.navbar').removeClass("fixed-top");
      $('.navbar-brand').addClass("d-none");
      }
  });
  $(document).ready(function () {
    $('.nav-link').click(function () {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
    });
  });
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
  });
  function Enviar() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Muchas gracias, su consulta fue enviada y se le responderá a la brevedad.',
      showConfirmButton: false,
      timer: 2500
    });
    $(':input[type="submit"]').prop('disabled', true);
    $(':input[type="submit"]').text("CONSULTA ENVIADA");
  }