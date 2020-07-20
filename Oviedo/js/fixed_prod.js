jQuery(document).scroll(function() {
    var y = jQuery(this).scrollTop();
    if (y > 550) {
        jQuery('.fixed-prodcont').css("display", "flex");
    } else {
        jQuery('.fixed-prodcont').css("display", "none");
    }
});