$(() => {
    var button = document.getElementsByClassName("button-add");
    for (const btn of button) {
        btn.addEventListener("click", addToCartClicked);
    }
    deleteEventButton();
});

deleteEventButton = () => {
    var buttonDelete = document.getElementsByClassName("button-delete");
    for (const btn of buttonDelete) {
        btn.addEventListener("click", deleteClicked);
    }
};

addToCartClicked = (event) => {
    var button = event.target;
    var parent = button.parentElement.parentElement.parentElement;
    var img = parent.getElementsByClassName("img-product")[0].src;
    var name = parent.getElementsByClassName("card-title")[0].innerText;
    var price = parent.getElementsByClassName("price")[0].innerText;
    addToCart(img, name, price);
};

addToCart = (img, name, price) => {
    var items = document.getElementById("list-cart");
    var item = items.getElementsByClassName("card");
    var htmls = `
    <div class="card product-xl border-1">
        <div class="row">
            <div class="col-lg-6 ">
                <img src="${img}" class="card-img w-100 img-fuild ps-2 pe-2" alt="...">
            </div>
            <div class="col-lg-6">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-1 text-muted pt-2">GIÁ: <span class="text-warning price">${price}</span>₫</h6>
                </div>
                <div class="icon-3 w-100">
                    <input class="btn btn-change" onclick="var result = document.getElementById('quantity${
                      item.length + 1
                    }'); var qty = result.value; if( !isNaN(qty) && qty > 1 ) result.value--;return false;" type='button' value='-' />
                    <input style="width: 30px;" id='quantity${
                      item.length + 1
                    }' class="quantity1" min='1' name='quantity' type='text' value='1' />
                    <input class="btn btn-change" onclick="var result = document.getElementById('quantity${
                      item.length + 1
                    }'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" type='button' value='+' />
                    <button class="btn button-delete p-0 ms-2 fal fa-trash-alt"></button>
                </div>
            </div>
        </div>
    </div>
    `;
    $("#list-cart").append(htmls);
    deleteEventButton();
    quantity();
    updatePrice();
};
deleteClicked = (event) => {
    var deleteButton = event.target;
    var parent =
        deleteButton.parentElement.parentElement.parentElement.parentElement;
    parent.remove();
};

updatePrice = () => {
    var formatter = new Intl.NumberFormat();
    var items = document.getElementById("list-cart");
    var item = items.getElementsByClassName("card");
    var total = 0;
    for (const e of item) {
        var quantity = e.getElementsByClassName("quantity1")[0].value;
        var price = e.getElementsByClassName("price")[0].innerHTML;
        total = quantity * parseInt(price);
    }
    $("#total-price").text(`${formatter.format(total)}₫`);
};

quantity = () => {
    var buttonChange = document.getElementsByClassName("btn-change");
    for (var i = 0; i < buttonChange.length; i++) {
        buttonChange[i].addEventListener("click", () => {
            updatePrice();
        });
    }
};
quantity();