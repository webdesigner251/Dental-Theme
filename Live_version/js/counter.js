// counter js
$(function () {
    const winHeight = $(window).height(),
      eleOffsetTop = $(".counting").offset().top,
      eleTop = eleOffsetTop - winHeight,
      current = 0;
  
    $(window).on("scroll", function () {
      const scrollTop = $(window).scrollTop();
  
      if (current == 0 && scrollTop >= eleTop) {
        $('.counting').each(function () {
          const $this = $(this),
            countTo = $this.attr('data-count');
  
          $({ countNum: $this.text() }).animate({
            countNum: countTo
          },
            {
              duration: 2000,
              easing: 'linear',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);  //alert('finished');
              }
            });
        });
      }
    });
  });