$(document).ready(function() {
    $(document).scroll(function() {
        var scroll = $(this).scrollTop();
        var topDist = $("#nav").position();
        if (scroll > topDist.top) {
            $('.nav').addClass('fixed');
            $('.prod-container').attr('style', 'padding-top: 70px !important;' + 'margin-top:0 !important');
        } else {
            $('.nav').removeClass('fixed');
            $('.prod-container').attr('style', 'padding-top: ;' + 'margin-top: ');
        }
    });
});