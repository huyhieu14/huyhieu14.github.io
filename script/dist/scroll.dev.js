"use strict";

var data_id = $(void 0).attr('href');
$('html, body').animate({
  scrollTop: $(data_id).offset().top
}, '500');