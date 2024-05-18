$(function () {
  $('nav a[href^="#"]').on("click", function () {
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
    $('nav a[href^="#"]').removeClass("active");
    $(this).addClass("active");
    $(".header__mobile .menu").toggle(500);
    $(".menu__burger").toggleClass("close");
    return false;
  });
  $(".menu__burger").on("click", function () {
    $(".header__mobile .menu").toggle(500);
    $(this).toggleClass("close");
  });
  $(".header__link").on("click", function () {
    let target = $(this).attr("href");
    $(".header__link").removeClass("active");
    $(this).addClass("active");
    return false;
  });
});
