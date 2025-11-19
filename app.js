$(document).ready(function() {

  $('.menu-toggle').on('click', function() {
    $('.nav-links').toggleClass('active');
  });

  $('.close-menu').on('click', function() {
    $('.nav-links').removeClass('active');
  });

  $(".avatar").click(function () {
      $(".avatar").removeClass("active");

      $(this).addClass("active");

      const text = $(this).data("text");
      const name = $(this).data("name");
      const role = $(this).data("role");

      $(".testimonial-text").fadeOut(150, function () {
          $(this).text(text).fadeIn(150);
      });

      $(".person-name").fadeOut(150, function () {
          $(this).text(name).fadeIn(150);
      });

      $(".person-role").fadeOut(150, function () {
          $(this).text(role).fadeIn(150);
      });
  });

});
