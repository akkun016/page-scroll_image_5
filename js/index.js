$(function() {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".article").each(function () {
      const targetTop = $(this).offset().top;
      const targetBottom = targetTop + $(this).height();

      if (scroll > targetTop - windowHeight + 100 && targetBottom - 300 > scroll) {
        $(this).addClass("fadein");
      }
    });
  });
});