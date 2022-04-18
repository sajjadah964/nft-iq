
// $(document).ready(function () {
//     $('#open-menu').click(function () {
//         $('#myLinks').slideToggle();
//     });
// });
var isMenuOpen=false;
$(document).ready(function () {
    $('.mobile-icon-wrapper').on ('click',function () {
        $('.mobile-icon-wrapper').children('span').fadeToggle();
        $('#myLinks').slideToggle();
        isMenuOpen=!isMenuOpen;
    });
});
$(window).on('resize',function() {
    if ($(window).width() >767) {
        $('#myLinks').show();  
    }
    else {
        if (isMenuOpen) {
            $('#myLinks').show();    
        } else {
            $('#myLinks').hide();  
        }
    }
})