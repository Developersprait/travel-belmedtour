$(function () {


    $('.header-btn__menu').on('click', function () {
        $('.menu ul').slideToggle();
      });
    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
      }); 
    $(document).on('click', '#submit', function() {
        $.fancybox.close();
    });
      
});