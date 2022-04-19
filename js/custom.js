
// $(document).ready(function () {
//     $('#open-menu').click(function () {
//         $('#myLinks').slideToggle();
//     });
// });
// (function () {
//     'use strict';
    var isMenuOpen = false;
    $(document).ready(function () {
        $('.mobile-icon-wrapper').on('click', function () {
            $('.mobile-icon-wrapper').children('span').fadeToggle();
            $('#myLinks').slideToggle();
            isMenuOpen = !isMenuOpen;
        });
    });
    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('#myLinks').show();
            $("#myLinks").addClass("d-grid");
        }
        else {
            $("#myLinks").removeClass("d-grid");
            if (isMenuOpen) {
                $('#myLinks').show();
            } else {
                $('#myLinks').hide();
            }
        }
    });
// }());