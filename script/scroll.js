var data_id = $(this).attr('href');
$('html, body').animate({
    scrollTop: $(data_id).offset().top
}, '500');