const $pic1 = $('div.man');
const $pic2 = $('div.woman');
const $pic3 = $('div.watch');
const $pic4 = $('div.off');
const $pic5 = $('div.sale');
const headerHight = $('header').outerHeight();

window.addEventListener('scroll', () => {

    if ($(window).width() < 767) {

        if ($(document).scrollTop() > $pic1.offset().top - headerHight / 2) {
            $pic1.addClass('active')
        };

        if ($(document).scrollTop() > $pic1.offset().top) {
            $pic2.addClass('active')
        };

        if ($(document).scrollTop() > $pic2.offset().top) {
            $pic3.addClass('active')
        };

        if ($(document).scrollTop() > $pic3.offset().top) {
            $pic4.addClass('active')
        };

        if ($(document).scrollTop() > $pic4.offset().top) {
            $pic5.addClass('active')
        };

    } else if ($(window).width() >= 767) {
        if ($(document).scrollTop() > headerHight / 2) {

            $pic1.addClass('active');
            $pic2.addClass('active');
            $pic3.addClass('active');
        };

        if ($(document).scrollTop() > $pic3.offset().top) {
            $pic4.addClass('active')
            $pic5.addClass('active')
        };
    }
})