"use strict";

let topLeft = document.getElementById("topLeft");
let topMiddle = document.getElementById("topMiddle");
let topRight = document.getElementById("topRight");
let middleLeft = document.getElementById("middleLeft");
let center = document.getElementById("center");
let middleRight = document.getElementById("middleRight");
let bottomLeft = document.getElementById("bottomLeft");
let bottomMiddle = document.getElementById("bottomMiddle");
let bottomRight = document.getElementById("bottomRight");

let topLeftXO = document.getElementById("topLeftXO");
let topMiddleXO = document.getElementById("topMiddleXO");
let topRightXO = document.getElementById("topRightXO");
let middleLeftXO = document.getElementById("middleLeftXO");
let centerXO = document.getElementById("centerXO");
let middleRightXO = document.getElementById("middleRightXO");
let bottomLeftXO = document.getElementById("bottomLeftXO");
let bottomMiddleXO = document.getElementById("bottomMiddleXO");
let bottomRightXO = document.getElementById("bottomRightXO");

let topLeftValue = 1;
let topMiddleValue = 2;
let topRightValue = 3;
let middleLeftValue = 4;
let centerValue = 5;
let middleRightValue = 6;
let bottomLeftValue = 7;
let bottomMiddleValue = 8;
let bottomRightValue = 9;

let activeName = document.querySelector(".whoIsActive");
let whoWon = document.querySelector(".whoWon");

let active = true;

let activing = function () {
  if (active) {
    activeName.textContent = "Player One";
  } else {
    activeName.textContent = "Player Two";
  }
};

let winning = function () {
  if (topLeftValue === topMiddleValue && topLeftValue === topRightValue) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  } else if (
    middleLeftValue === centerValue &&
    middleLeftValue === middleRightValue
  ) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  } else if (
    bottomLeftValue === bottomMiddleValue &&
    bottomLeftValue === bottomRightValue
  ) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  } else if (
    topLeftValue === middleLeftValue &&
    topLeftValue === bottomLeftValue
  ) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  } else if (
    topMiddleValue === centerValue &&
    topMiddleValue === bottomMiddleValue
  ) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  } else if (
    topRightValue === middleRightValue &&
    topRightValue === bottomRightValue
  ) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  } else if (
    topLeftValue === centerValue &&
    topLeftValue === bottomRightValue
  ) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  } else if (
    topRightValue === centerValue &&
    topRightValue === bottomLeftValue
  ) {
    console.log(active);
    if (active) whoWon.textContent = "Player Two Won";
    else if (!active) whoWon.textContent = "Player One Won";
  }
};

topLeft.addEventListener("click", function () {
  topLeft.classList.add("hidden");
  if (active) {
    topLeftValue = "X";
    topLeftXO.textContent = topLeftValue;
    console.log(topLeftValue);
    active = false;
  } else {
    topLeftValue = "O";
    topLeftXO.textContent = topLeftValue;
    console.log(topLeftValue);
    active = true;
  }
  activing();
  winning();
});

topMiddle.addEventListener("click", function () {
  topMiddle.classList.add("hidden");
  if (active) {
    topMiddleValue = "X";
    topMiddleXO.textContent = topMiddleValue;
    console.log(topMiddleValue);
    active = false;
  } else {
    topMiddleValue = "O";
    topMiddleXO.textContent = topMiddleValue;
    console.log(topMiddleValue);
    active = true;
  }
  activing();
  winning();
});

topRight.addEventListener("click", function () {
  topRight.classList.add("hidden");
  if (active) {
    topRightValue = "X";
    topRightXO.textContent = topRightValue;
    console.log(topRightValue);
    active = false;
  } else {
    topRightValue = "O";
    topRightXO.textContent = topRightValue;
    console.log(topRightValue);
    active = true;
  }
  activing();
  winning();
});

middleLeft.addEventListener("click", function () {
  middleLeft.classList.add("hidden");
  if (active) {
    middleLeftValue = "X";
    middleLeftXO.textContent = middleLeftValue;
    console.log(middleLeftValue);
    active = false;
  } else {
    middleLeftValue = "O";
    middleLeftXO.textContent = middleLeftValue;
    console.log(middleLeftValue);
    active = true;
  }
  activing();
  winning();
});

center.addEventListener("click", function () {
  center.classList.add("hidden");
  if (active) {
    centerValue = "X";
    centerXO.textContent = centerValue;
    console.log(centerValue);
    active = false;
  } else {
    centerValue = "O";
    centerXO.textContent = centerValue;
    console.log(centerValue);
    active = true;
  }
  activing();
  winning();
});

middleRight.addEventListener("click", function () {
  middleRight.classList.add("hidden");
  if (active) {
    middleRightValue = "X";
    middleRightXO.textContent = middleRightValue;
    console.log(middleRightValue);
    active = false;
  } else {
    middleRightValue = "O";
    middleRightXO.textContent = middleRightValue;
    console.log(middleRightValue);
    active = true;
  }
  activing();
  winning();
});

bottomLeft.addEventListener("click", function () {
  bottomLeft.classList.add("hidden");
  if (active) {
    bottomLeftValue = "X";
    bottomLeftXO.textContent = bottomLeftValue;
    console.log(bottomLeftValue);
    active = false;
  } else {
    bottomLeftValue = "O";
    bottomLeftXO.textContent = bottomLeftValue;
    console.log(bottomLeftValue);
    active = true;
  }
  activing();
  winning();
});

bottomMiddle.addEventListener("click", function () {
  bottomMiddle.classList.add("hidden");
  if (active) {
    bottomMiddleValue = "X";
    bottomMiddleXO.textContent = bottomMiddleValue;
    console.log(bottomMiddleValue);
    active = false;
  } else {
    bottomMiddleValue = "O";
    bottomMiddleXO.textContent = bottomMiddleValue;
    console.log(bottomMiddleValue);
    active = true;
  }
  activing();
  winning();
});

bottomRight.addEventListener("click", function () {
  bottomRight.classList.add("hidden");
  if (active) {
    bottomRightValue = "X";
    bottomRightXO.textContent = bottomRightValue;
    console.log(bottomRightValue);
    active = false;
  } else {
    bottomRightValue = "O";
    bottomRightXO.textContent = bottomRightValue;
    console.log(bottomRightValue);
    active = true;
  }
  activing();
  winning();
});
