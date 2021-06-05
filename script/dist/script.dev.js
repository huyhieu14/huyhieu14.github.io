"use strict";

// ---------vertical-menu with-inner-menu-active-animation-----------
var tabsVerticalInner = $('#accordian');
var selectorVerticalInner = $('#accordian').find('li').length;
var activeItemVerticalInner = tabsVerticalInner.find('.active');
var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
var itemPosVerticalTop = activeItemVerticalInner.position();
var itemPosVerticalLeft = activeItemVerticalInner.position();

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks; // Get all elements with class="tabcontent" and hide them

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  } // Get all elements with class="tablinks" and remove the class "active"


  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  } // Show the current tab, and add an "active" class to the button that opened the tab


  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$('#myCarousel').carousel({
  interval: false
}); //scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function (event) {
  var yClick = event.originalEvent.touches[0].pageY;
  $(this).one("touchmove", function (event) {
    var yMove = event.originalEvent.touches[0].pageY;

    if (Math.floor(yClick - yMove) > 1) {
      $(".carousel").carousel('next');
    } else if (Math.floor(yClick - yMove) < -1) {
      $(".carousel").carousel('prev');
    }
  });
  $(".carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
});