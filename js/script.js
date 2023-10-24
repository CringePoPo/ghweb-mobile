$(document).ready(function() {
  $('ul.dropdown li').click(function() {
    $(this).children('ul.sub-sub-menu').toggle();
  });
});
