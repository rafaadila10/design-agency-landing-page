$(document).ready(function() {
  $('.menu-toggle').on('click', function() {
    $('.nav-links').toggleClass('active');
  });

  $('.close-menu').on('click', function() {
    $('.nav-links').removeClass('active');
  });
});
