window.addEventListener("load", prepareGUI, false);
var count = 0;
var total = "0";
var target="";
function prepareGUI() {
    "use strict";
    var buttonsRefs = document.querySelectorAll(".btn-dark");

    for (var i = 0; i < buttonsRefs.length; i++) {
        buttonsRefs[i].addEventListener("click", AddProductToCart);
    }

    LoadAllOptions();
    var TotalRef = document.querySelector(".lblTotalt");
    var TotalRef2 = document.querySelector("#price");
    TotalRef.childNodes[0].nodeValue = total;
    TotalRef2.childNodes[0].nodeValue = total;

    var ButtonBuy = document.querySelector("#Kop");
    ButtonBuy.addEventListener("click", Buyfunction);

}

function LoadAllOptions() {

    var selectRef = document.querySelector("select");

    for (var i = 1; i < 17; i++) {
        var optionRef = document.createElement("option");
        optionRef.setAttribute("value", i);
        var text = "bordsnummer: " + i
        optionRef.innerHTML = text;
        selectRef.add(optionRef);
    }
}
function AddProductToCart(evt) {
    var formRef = document.querySelector(".noteringar");
    var input = document.getElementById("Noteringar");
    var addButtonRef = document.querySelector("#submit");
    var cancelButtonRef = document.querySelector("#cancel");
    target = evt.target;

    if (formRef.style.display === 'block') {
        input.focus();
    } else {
        formRef.style.display = "block";
        cancelButtonRef.addEventListener("click", cancel);
        addButtonRef.addEventListener("click", add);
}
}
function add(evt){
    console.log("haha");
    var formRef = document.querySelector(".noteringar");
    var input = document.getElementById("Noteringar");
    var text;
    var tdRef = document.querySelector("Td[class='hidden-xs']");
    evt.preventDefault();
    evt.stopPropagation();
    tdRef.innerHTML = "";
    if (input.value.length > 0) {
        text = input.value;
    } else {
        text = "Inget tillägg";
    }
    input.value = "";
    formRef.style.display = "none";
    var spanForCount = document.querySelector("#lblAntal");
    var spanForCount2 = document.querySelector("#lblAntal2");
    var trRef = document.createElement("tr");
    var tbodyRef = document.querySelector("tbody");
    var produktRef = target.parentNode.parentNode.children[0].innerHTML;
    var produktPris = target.parentNode.childNodes[0].nodeValue;
    ++count;
    spanForCount.innerHTML = count;
    spanForCount2.innerHTML = count;
    for (var i = 0; i < 5; i++) {
        if (i === 0) {
            var tdRef = document.createElement("td");
            tdRef.setAttribute("data-th", "Produkt");
            var divRef = document.createElement("div");
            divRef.className = "row";
            var divRef2 = document.createElement("div");
            divRef2.className = "col-sm-10";
            var pRef = document.createElement("p");
            pRef.innerHTML = produktRef;
            divRef2.appendChild(pRef);
            tdRef.appendChild(divRef2);
            divRef.appendChild(divRef2);
            tdRef.appendChild(divRef);
            trRef.appendChild(tdRef);
        }
        if (i === 1) {
            var tdRef = document.createElement("td");
            tdRef.setAttribute("data-th", "Pris");
            tdRef.innerHTML = produktPris;
            total = parseInt(total) + parseInt(produktPris);
            trRef.appendChild(tdRef);
        }
        if (i === 2) {
            var tdRef = document.createElement("td");
            tdRef.setAttribute("data-th", "Antal");
            tdRef.innerHTML = 1;
            trRef.appendChild(tdRef);
        }
        if (i === 3) {
            var tdRef = document.createElement("td");
            tdRef.setAttribute("data-th", "Notering");
            tdRef.innerHTML = text;
            trRef.appendChild(tdRef);
        }
        if (i == 4) {
            var tdRef = document.createElement("td");
            tdRef.className = "actions";
            var buttonRef = document.createElement("button");
            buttonRef.className = "btn btn-danger btn-sm";
            buttonRef.setAttribute("id", "deleteButton");
            var iRef = document.createElement("i");
            iRef.className = "fa fa-trash";
            buttonRef.appendChild(iRef);
            tdRef.appendChild(buttonRef);
            trRef.appendChild(tdRef);
            buttonRef.addEventListener("click", DeleteProduct);

        }
    }
    tbodyRef.appendChild(trRef);

    var TotalRef = document.querySelector(".lblTotalt");
    var TotalRef2 = document.querySelector("#price");
    TotalRef2.childNodes[0].nodeValue = total;
    TotalRef.childNodes[0].nodeValue = total;
}
function cancel(evt) {
    evt.preventDefault();
    evt.stopPropagation()
    var formRef = document.querySelector(".noteringar");
    var input = document.getElementById("Noteringar");
    input.value = "";
    formRef.style.display = "none";
}
function DeleteProduct(Es) {
    var parent = Es.target.parentNode.parentNode;
    var pris = Es.target.parentNode.parentNode.childNodes[1].innerHTML;
    var spanForCount = document.querySelector("#lblAntal");
    var spanForCount2 = document.querySelector("#lblAntal2");
    var TotalRef = document.querySelector(".lblTotalt");
    var TotalRef2 = document.querySelector("#price");
    count = count - 1;
    parent.classList.add("animateDelete");
    total = parseInt(total) - parseInt(pris);


    setTimeout(function () {
        parent.remove();
        TotalRef.childNodes[0].nodeValue = total;
        TotalRef2.childNodes[0].nodeValue = total;
        spanForCount.innerHTML = count;
        spanForCount2.innerHTML = count;
    }, 500);

}

function Buyfunction(e) {
    var spanForCount = document.querySelector("#lblAntal");
    var spanForCount2 = document.querySelector("#lblAntal2");
    var selectRef = document.querySelector("select");
    var tdRef = document.querySelector("Td[class='hidden-xs']");

    e.stopPropagation();
    e.preventDefault();

    if (spanForCount.innerHTML == 0 || spanForCount.innerHTML == "") {
        tdRef.style.color = "red";
        tdRef.innerHTML = "Du måste minst köpa en produkt";
        tdRef.style.textAlign = "center";
    } else {
        if (selectRef.value == 0) {
            tdRef.innerHTML = "Du måste ange ett bordsnummer!";
            tdRef.style.color = "red";
            tdRef.style.textAlign = "center";
            selectRef.classList.add("highlght");
        } else {
            removeAllProduct(spanForCount, spanForCount2, selectRef, tdRef, selectRef);
        }
    }
}
function removeAllProduct(spanForCount, spanForCount2, selectRef, tdRef) {
    var TotalRef = document.querySelector(".lblTotalt");
    var TotalRef2 = document.querySelector("#price");
    var tRef = document.querySelectorAll("Tbody tr ");
    count = "";
    total = 0;
    spanForCount.innerHTML = count;
    spanForCount2.innerHTML = count;
    TotalRef2.childNodes[0].nodeValue = total;
    TotalRef.childNodes[0].nodeValue = total;
    selectRef.value = 0;
    for (var i = 0; i < tRef.length; i++) {
        tRef[i].remove();
    }
    selectRef.classList.remove("highlght");
    tdRef.style.color = "green";
    tdRef.innerHTML = "Tack för att du köpte!";
    tdRef.style.textAlign = "center";


}