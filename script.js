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

let pronounceWinner = function () {
  if (active) whoWon.textContent = "Player Two Won";
  else if (!active) whoWon.textContent = "Player One Won";
};

let hideButton = function () {
  topLeft.classList.add("hidden");
  topMiddle.classList.add("hidden");
  topRight.classList.add("hidden");
  middleLeft.classList.add("hidden");
  center.classList.add("hidden");
  middleRight.classList.add("hidden");
  bottomLeft.classList.add("hidden");
  bottomMiddle.classList.add("hidden");
  bottomRight.classList.add("hidden");
};

let winning = function () {
  if (topLeftValue === topMiddleValue && topLeftValue === topRightValue) {
    hideButton();
    pronounceWinner();
  } else if (
    middleLeftValue === centerValue &&
    middleLeftValue === middleRightValue
  ) {
    pronounceWinner();
    hideButton();
  } else if (
    bottomLeftValue === bottomMiddleValue &&
    bottomLeftValue === bottomRightValue
  ) {
    pronounceWinner();
    hideButton();
  } else if (
    topLeftValue === middleLeftValue &&
    topLeftValue === bottomLeftValue
  ) {
    pronounceWinner();
    hideButton();
  } else if (
    topMiddleValue === centerValue &&
    topMiddleValue === bottomMiddleValue
  ) {
    pronounceWinner();
    hideButton();
  } else if (
    topRightValue === middleRightValue &&
    topRightValue === bottomRightValue
  ) {
    pronounceWinner();
    hideButton();
  } else if (
    topLeftValue === centerValue &&
    topLeftValue === bottomRightValue
  ) {
    pronounceWinner();
    hideButton();
  } else if (
    topRightValue === centerValue &&
    topRightValue === bottomLeftValue
  ) {
    pronounceWinner();
    hideButton();
  }
};

topLeft.addEventListener("click", function () {
  topLeft.classList.add("hidden");
  if (active) {
    topLeftValue = "X";
    topLeftXO.textContent = topLeftValue;
    active = false;
  } else {
    topLeftValue = "O";
    topLeftXO.textContent = topLeftValue;
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
    active = false;
  } else {
    topMiddleValue = "O";
    topMiddleXO.textContent = topMiddleValue;
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
    active = false;
  } else {
    topRightValue = "O";
    topRightXO.textContent = topRightValue;
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
    active = false;
  } else {
    middleLeftValue = "O";
    middleLeftXO.textContent = middleLeftValue;
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
    active = false;
  } else {
    centerValue = "O";
    centerXO.textContent = centerValue;
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
    active = false;
  } else {
    middleRightValue = "O";
    middleRightXO.textContent = middleRightValue;
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
    active = false;
  } else {
    bottomLeftValue = "O";
    bottomLeftXO.textContent = bottomLeftValue;
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
    active = false;
  } else {
    bottomMiddleValue = "O";
    bottomMiddleXO.textContent = bottomMiddleValue;
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
    active = false;
  } else {
    bottomRightValue = "O";
    bottomRightXO.textContent = bottomRightValue;
    active = true;
  }
  activing();
  winning();
});
