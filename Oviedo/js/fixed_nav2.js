jQuery(document).scroll(function() {
    var fixednav = jQuery(this).scrollTop();
    if (fixednav > 100) {
        jQuery('.nav-sections-item-content').addClass('sticky');
    } else {
        jQuery('.nav-sections-item-content').removeClass('sticky');
    }
});