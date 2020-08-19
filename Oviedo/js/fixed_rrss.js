jQuery(document).scroll(function() {
    var fixedrrss = jQuery(this).scrollTop();
    if (fixedrrss > 100) {
        jQuery('.contactos').addClass('contactos-active');
    } else {
        jQuery('.contactos').removeClass('contactos-active');
    }
});