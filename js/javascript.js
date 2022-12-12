$(window).on('load', function () {
    $('#preloader .inner');
    $('#preloader').delay(950).fadeOut('slow');
    $('body').delay(950).css({
        'overflow': 'visible'
    });
})

