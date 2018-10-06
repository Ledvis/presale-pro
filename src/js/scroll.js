/*eslint-disable */

import $ from 'jquery';

export default function init() {
  $(document).ready(function() {
    $('navigation__link a').bind('click', function(e) {
      e.preventDefault();

      var target = $(this).attr("href");

      $('html, body').stop().animate({
        scrollTop: $(target).offset().top
      }, 600, function() {
        location.hash = target;
      });

      return false;
    });
  });

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('section').each(function(i) {
      if ($(this).position().top <= (scrollDistance + 100)) {
        $('.navigation__item--active').removeClass('navigation__item--active');
        $('.navigation__item').eq(i).addClass('navigation__item--active');
      }
    });
  }).scroll();
}
