var tabsVerticalInner = $('#accordian');
var selectorVerticalInner = $('#accordian').find('li').length;
var activeItemVerticalInner = tabsVerticalInner.find('.active');
var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
var itemPosVerticalTop = activeItemVerticalInner.position();
var itemPosVerticalLeft = activeItemVerticalInner.position();