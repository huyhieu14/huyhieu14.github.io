"use strict";

$(function () {
  var button = document.getElementsByClassName("button-add");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = button[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var btn = _step.value;
      btn.addEventListener("click", addToCartClicked);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  deleteEventButton();
});

deleteEventButton = function deleteEventButton() {
  var buttonDelete = document.getElementsByClassName("button-delete");
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = buttonDelete[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var btn = _step2.value;
      btn.addEventListener("click", deleteClicked);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

addToCartClicked = function addToCartClicked(event) {
  var button = event.target;
  var parent = button.parentElement.parentElement.parentElement;
  var img = parent.getElementsByClassName("img-product")[0].src;
  var name = parent.getElementsByClassName("card-title")[0].innerText;
  var price = parent.getElementsByClassName("price")[0].innerText;
  addToCart(img, name, price);
};

addToCart = function addToCart(img, name, price) {
  var items = document.getElementById("list-cart");
  var item = items.getElementsByClassName("card");
  var htmls = "\n    <div class=\"card product-xl border-1\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 \">\n                <img src=\"".concat(img, "\" class=\"card-img w-100 img-fuild ps-2 pe-2\" alt=\"...\">\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(name, "</h5>\n                    <h6 class=\"card-subtitle mb-1 text-muted pt-2\">GI\xC1: <span class=\"text-warning price\">").concat(price, "</span>\u20AB</h6>\n                </div>\n                <div class=\"icon-3 w-100\">\n                    <input class=\"btn btn-change\" onclick=\"var result = document.getElementById('quantity").concat(item.length + 1, "'); var qty = result.value; if( !isNaN(qty) && qty > 1 ) result.value--;return false;\" type='button' value='-' />\n                    <input style=\"width: 30px;\" id='quantity").concat(item.length + 1, "' class=\"quantity1\" min='1' name='quantity' type='text' value='1' />\n                    <input class=\"btn btn-change\" onclick=\"var result = document.getElementById('quantity").concat(item.length + 1, "'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;\" type='button' value='+' />\n                    <button class=\"btn button-delete p-0 ms-2 fal fa-trash-alt\"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n    ");
  $("#list-cart").append(htmls);
  deleteEventButton();
  quantity();
  updatePrice();
};

deleteClicked = function deleteClicked(event) {
  var deleteButton = event.target;
  var parent = deleteButton.parentElement.parentElement.parentElement.parentElement;
  parent.remove();
};

updatePrice = function updatePrice() {
  var formatter = new Intl.NumberFormat();
  var items = document.getElementById("list-cart");
  var item = items.getElementsByClassName("card");
  var total = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = item[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var e = _step3.value;
      var quantity = e.getElementsByClassName("quantity1")[0].value;
      var price = e.getElementsByClassName("price")[0].innerHTML;
      total = quantity * parseInt(price);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  $("#total-price").text("".concat(formatter.format(total), "\u20AB"));
};

quantity = function quantity() {
  var buttonChange = document.getElementsByClassName("btn-change");

  for (var i = 0; i < buttonChange.length; i++) {
    buttonChange[i].addEventListener("click", function () {
      updatePrice();
    });
  }
};

quantity();