//Likes//
let likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    like.addEventListener("click", function() {
        if (like.firstChild.style.color == "red") {
            like.firstChild.style.color = "black"
        } else {
            like.firstChild.style.color = "red"
        }

    })
}
//Deletes//
let deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
    let del = deletes[i];
    del.addEventListener("click", function() {
        del.parentElement.remove();
        total()
    })
}
//addition//
let additions = document.getElementsByClassName("plus-btn");
let prices = document.getElementsByClassName("price");
for (let i = 0; i < additions.length; i++) {
    let add = additions[i];
    let price = prices[i];
    let fprice = parseFloat(prices[i].innerHTML);
    add.addEventListener("click", function() {
        if (add.previousElementSibling.value < 100) {
            x = add.previousElementSibling.value = parseFloat(add.previousElementSibling.value) + 1
            price.innerHTML = fprice * parseFloat(x)
            total()

        } else
            add.previousElementSibling.value = 100;
        total()

    })
}

//subtraction//
let subtractions = document.getElementsByClassName("minus-btn");

for (let i = 0; i < subtractions.length; i++) {
    let sub = subtractions[i];
    let price = prices[i];
    let fprice = parseFloat(prices[i].innerHTML);
    sub.addEventListener("click", function() {
        if (sub.nextElementSibling.value > 1) {
            x = sub.nextElementSibling.value = parseFloat(sub.nextElementSibling.value) - 1
            price.innerHTML = fprice * parseFloat(x)
            total()

        } else {
            sub.nextElementSibling.value = 1;
            total()
        }
    })
}

function total() {
    let total = document.getElementById("finalPrice")
    var x = 0;
    for (let i = 0; i < prices.length; i++) {
        x += parseFloat(prices[i].innerHTML);
    }
    total.value = x
}