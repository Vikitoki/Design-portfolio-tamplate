$(function () {
  "use strict";

  // Scroll btn ======================

  const introHeight = $("#intro").innerHeight(),
    footerOffSet = $("#footer").offset().top;

  checkScroll();
  $(window).on("scroll resize", function () {
    checkScroll();
  });

  $("#scrollBtn").on("click", function (event) {
    event.preventDefault();

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });

  function checkScroll() {
    let scrollTop = $(window).scrollTop(),
      windowHeight = $(window).innerHeight();

    if (scrollTop > introHeight / 2) {
      $("#scrollBtn").addClass("show");
    } else {
      $("#scrollBtn").removeClass("show");
    }

    if (scrollTop + windowHeight > footerOffSet) {
      $("#scrollBtn").removeClass("show");
    }
  }

  // Scroll btn ======================

  const burgerBtn = $("#burgerMenu");

  burgerBtn.on("click", function (event) {
    event.preventDefault();

    $(".menu-header__body").toggleClass("show");
    $(".header").toggleClass("active");
    $(this).toggleClass("active");
  });

  $("#nav li").on("click", function (event) {
    $(".menu-header__body").removeClass("show");
    $(".header").removeClass("active");
    $(burgerBtn).removeClass("active");
  });

  //   Filter group in works block ======================

  let cat = $("[data-filter]");

  cat.on("click", function (event) {
    event.preventDefault();

    let catBox = $(this).data("filter");

    $("[data-cat]").animate({ opacity: "0" }, 200);

    if (catBox === "all") {
      setTimeout(function () {
        $("[data-cat]").css({
          display: "block",
          opacity: "1",
        });
      }, 300);
    } else {
      $("[data-cat]").each(function () {
        let catWork = $(this).data("cat");

        if (catWork != catBox) {
          $(this).animate({ opacity: "0" }, 200);
          setTimeout(function () {
            $(`[data-cat = '${catWork}']`).css("display", "none");
          }, 300);
        } else {
          setTimeout(function () {
            $(`[data-cat = '${catWork}']`).css("display", "block");
          }, 300);

          $(this).animate({ opacity: "1" }, 200);
        }
      });
    }
  });

  //  Modal windows ====================

  //   Open

  $("[data-modal]").on("click", function (event) {
    event.preventDefault();

    let modalId = $(this).data("modal");
    console.log(modalId);
    modalOpen(modalId);
  });

  //   Close btn

  $("[data-modal-close]").on("click", function (event) {
    event.preventDefault();

    let modalId = $(this).data("modal-close");

    modalClose(modalId);
  });

  //   Close click to modal

  $("[data-main]").on("click", function () {
    modalClose($(this));
  });

  $("[data-inner]").on("click", function (event) {
    event.stopPropagation();
  });

  //   Function

  function modalOpen(m) {
    $(m).addClass("show");
    $("body").addClass("no--scroll");
  }

  function modalClose(m) {
    $(m).removeClass("show");
    $("body").removeClass("no--scroll");
  }

  //  Scroll section ====================

  $("[data-section]").on("click", function (event) {
    event.preventDefault();

    let dataBox = $(this).data("section"),
      dataOffSet = $(dataBox).offset().top;

    $("html , body").animate(
      {
        scrollTop: dataOffSet - $(window).innerHeight() / 5,
      },
      700
    );
  });

  // Slick Slder https://kenwheeler.github.io/slick/ ========================================

  // Reviews

  $("#reviewsSliderFirst").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: "#reviewsSliderSecond",
  });

  $(".slider-btns__prev").on("click", function (event) {
    event.preventDefault();

    $("#reviewsSliderFirst").slick("slickPrev");
  });

  $(".slider-btns__next").on("click", function (event) {
    event.preventDefault();

    $("#reviewsSliderFirst").slick("slickNext");
  });

  $("#reviewsSliderSecond").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: "#reviewsSliderFirst",
    fade: true,
  });

  //   Works

  $("#worksSliderFirst").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    asNavFor: "#worksSliderSecond",
  });

  $("#worksSliderSecond").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    fade: true,
    asNavFor: "#worksSliderFirst",
  });

  $(".description-modal__btn-prev").on("click", function (event) {
    event.preventDefault();

    $("#worksSliderFirst").slick("slickPrev");
  });

  $(".description-modal__btn-next").on("click", function (event) {
    event.preventDefault();

    $("#worksSliderFirst").slick("slickNext");
	});
	
	 
});
