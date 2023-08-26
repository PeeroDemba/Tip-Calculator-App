"use strict";

let tip;
let btnval;
const reset = document.getElementById("reset");
const bill = document.getElementById("bill");
const people = document.getElementById("people");
const errormsg = document.getElementById("errormsg");
const tav = document.getElementById("tipamountvalue");
const tpv = document.getElementById("totalpersonvalue");
const custom = document.getElementById("custom");
const stated = document.getElementById("stated");
const tipamount = document.getElementsByName("tip");

function undisable() {
  let pattern = /^[0-9.]{1,10}$/;
  if (pattern.test(bill.value) && pattern.test(people.value)) {
    reset.removeAttribute("disabled");
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
  } else if (!(pattern.test(bill.value) && pattern.test(people.value))) {
    reset.setAttribute("disabled", true);
    reset.style.backgroundColor = "hsl(184, 77%, 26%)";
  }
}

reset.addEventListener("click", function () {
  tav.innerHTML = "0.00";
  tpv.innerHTML = "0.00";
});

bill.addEventListener("input", undisable);
people.addEventListener("input", undisable);

people.addEventListener("input", function () {
  if (people.value == 0) {
    errormsg.className = "show";
    people.style.outlineColor = "rgb(247, 138, 138)";
    reset.setAttribute("disabled", true);
    reset.style.backgroundColor = "hsl(184, 77%, 26%)";
  }
  if (people.value != 0) {
    errormsg.className = "hide";
    people.style.outlineColor = "hsl(172, 67%, 45%)";
  }
});

function statedpercent() {
  for (var i = 0; i < tipamount.length; i++) {
    if (tipamount[i].checked) {
      btnval = tipamount[i].value;
      tipamount[i].style.backgroundColor = "hsl(172, 67%, 45%)";
      tipamount[i].style.color = "black";
    } else {
      tipamount[i].style.backgroundColor = "hsl(183, 100%, 15%)";
      tipamount[i].style.color = "white";
    }
  }
  custom.value = "";
}

function custompercent() {
  btnval = custom.value;
}

function calculate() {
  tip = Number(btnval);
  let a = Number(bill.value);
  let b = Number(people.value);
  let c = Number(tip) / 100;
  let d = c * a;
  let x = d / b;
  tav.innerHTML = x.toFixed(2);
  let e = a / b;
  let y = e + Number(x);
  tpv.innerHTML = y.toFixed(2);
}

bill.addEventListener("input", calculate);
people.addEventListener("input", calculate);
stated.addEventListener("click", statedpercent);
custom.addEventListener("input", custompercent);
stated.addEventListener("click", calculate);
custom.addEventListener("input", calculate);

custom.addEventListener("focus", function () {
  tipamount[0].style.backgroundColor = "hsl(183, 100%, 15%)";
  tipamount[0].style.color = "white";
  tipamount[1].style.backgroundColor = "hsl(183, 100%, 15%)";
  tipamount[1].style.color = "white";
  tipamount[2].style.backgroundColor = "hsl(183, 100%, 15%)";
  tipamount[2].style.color = "white";
  tipamount[3].style.backgroundColor = "hsl(183, 100%, 15%)";
  tipamount[3].style.color = "white";
  tipamount[4].style.backgroundColor = "hsl(183, 100%, 15%)";
  tipamount[4].style.color = "white";
});

tipamount[0].addEventListener("mouseover", function () {
  if (tipamount[0].checked) {
    tipamount[0].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[0].style.color = "black";
  } else {
    tipamount[0].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[0].style.color = "hsl(183, 100%, 15%)";
  }
  if (tipamount[0].checked && custom.value != "") {
    tipamount[0].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[0].style.color = "hsl(183, 100%, 15%)";
  }
});
tipamount[0].addEventListener("mouseout", function () {
  if (tipamount[0].checked) {
    tipamount[0].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[0].style.color = "black";
  } else {
    tipamount[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[0].style.color = "white";
  }
  if (tipamount[0].checked && custom.value != "") {
    tipamount[0].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[0].style.color = "white";
  }
});
tipamount[1].addEventListener("mouseover", function () {
  if (tipamount[1].checked) {
    tipamount[1].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[1].style.color = "black";
  } else {
    tipamount[1].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[1].style.color = "hsl(183, 100%, 15%)";
  }
  if (tipamount[1].checked && custom.value != "") {
    tipamount[1].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[1].style.color = "hsl(183, 100%, 15%)";
  }
});
tipamount[1].addEventListener("mouseout", function () {
  if (tipamount[1].checked) {
    tipamount[1].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[1].style.color = "black";
  } else {
    tipamount[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[1].style.color = "white";
  }
  if (tipamount[1].checked && custom.value != "") {
    tipamount[1].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[1].style.color = "white";
  }
});
tipamount[2].addEventListener("mouseover", function () {
  if (tipamount[2].checked) {
    tipamount[2].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[2].style.color = "black";
  } else {
    tipamount[2].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[2].style.color = "hsl(183, 100%, 15%)";
  }
  if (tipamount[2].checked && custom.value != "") {
    tipamount[2].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[2].style.color = "hsl(183, 100%, 15%)";
  }
});
tipamount[2].addEventListener("mouseout", function () {
  if (tipamount[2].checked) {
    tipamount[2].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[2].style.color = "black";
  } else {
    tipamount[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[2].style.color = "white";
  }
  if (tipamount[2].checked && custom.value != "") {
    tipamount[2].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[2].style.color = "white";
  }
});
tipamount[3].addEventListener("mouseover", function () {
  if (tipamount[3].checked) {
    tipamount[3].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[3].style.color = "black";
  } else {
    tipamount[3].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[3].style.color = "hsl(183, 100%, 15%)";
  }
  if (tipamount[3].checked && custom.value != "") {
    tipamount[3].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[3].style.color = "hsl(183, 100%, 15%)";
  }
});
tipamount[3].addEventListener("mouseout", function () {
  if (tipamount[3].checked) {
    tipamount[3].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[3].style.color = "black";
  } else {
    tipamount[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[3].style.color = "white";
  }
  if (tipamount[3].checked && custom.value != "") {
    tipamount[3].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[3].style.color = "white";
  }
});
tipamount[4].addEventListener("mouseover", function () {
  if (tipamount[4].checked) {
    tipamount[4].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[4].style.color = "black";
  } else {
    tipamount[4].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[4].style.color = "hsl(183, 100%, 15%)";
  }
  if (tipamount[4].checked && custom.value != "") {
    tipamount[4].style.backgroundColor = "hsl(180, 63%, 82%)";
    tipamount[4].style.color = "hsl(183, 100%, 15%)";
  }
});
tipamount[4].addEventListener("mouseout", function () {
  if (tipamount[4].checked) {
    tipamount[4].style.backgroundColor = "hsl(172, 67%, 45%)";
    tipamount[4].style.color = "black";
  } else {
    tipamount[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[4].style.color = "white";
  }
  if (tipamount[4].checked && custom.value != "") {
    tipamount[4].style.backgroundColor = "hsl(183, 100%, 15%)";
    tipamount[4].style.color = "white";
  }
});
