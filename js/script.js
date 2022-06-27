$(".green").click(function(){
  $(".style").attr("href","css/style 2.css")
})

$(".blue").click(function(){
  $(".style").attr("href","css/style3.css")
})
$(".black").click(function(){
  $(".style").attr("href","css/drack.css")
})
$(".button").click(function(){
  $(".color").toggleClass("test")
})



$(".banner_slider").slick({
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left bprev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right bnext"></i>',
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

});
$(".team_slider").slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$(".testimonial-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$(".sponcer_slider").slick({
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});


$("#colorful").colorfulTab(); 

$('.venobox').venobox()

$('.counter').counterUp({
    delay: 10,
    time: 1000
});