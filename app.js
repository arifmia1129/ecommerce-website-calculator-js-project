function productQuantity(product, isIncrease) {
    const productQuantity = document.getElementById(product + "-quantity");
    const productPrice = document.getElementById(product + "-price");
    if (isIncrease == true) {
        productQuantity.innerText = Number(productQuantity.innerText) + 1;
    }
    else {
        if (Number(productQuantity.innerText) > 0) {
            productQuantity.innerText = Number(productQuantity.innerText) - 1;
        }
    }
    if (product == "phone") {
        productPrice.innerText = Number(productQuantity.innerText) * 1219;
    }
    else if (product == "case") {
        productPrice.innerText = Number(productQuantity.innerText) * 59;
    }
    const phonePrice = document.getElementById("phone-price").innerText;
    const casePrice = document.getElementById("case-price").innerText;


    const subtotalPrice = document.getElementById("subtotal-price");
    subtotalPrice.innerText = parseFloat(phonePrice) + parseFloat(casePrice);


    const taxPrice = document.getElementById("tax-price");
    taxPrice.innerText = (parseFloat(subtotalPrice.innerText) * 10 / 100).toFixed(2);

    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = (parseFloat(subtotalPrice.innerText) + parseFloat(taxPrice.innerText)).toFixed(2);
}

function closeChild(product) {
    const closeChild = document.getElementById(product + "-item");
    closeChild.parentNode.removeChild(closeChild);
}

document.getElementById("phone-plus").addEventListener("click", function () {
    productQuantity("phone", true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
    productQuantity("phone", false);
});
document.getElementById("phone-close").addEventListener("click", function () {
    closeChild("phone");
});
document.getElementById("case-plus").addEventListener("click", function () {
    productQuantity("case", true);
});
document.getElementById("case-minus").addEventListener("click", function () {
    productQuantity("case", false);
});
document.getElementById("case-close").addEventListener("click", function () {
    closeChild("case");
});