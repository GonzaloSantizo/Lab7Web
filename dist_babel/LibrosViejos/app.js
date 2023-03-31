"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startApp = void 0;
var startApp = function startApp() {
  document.getElementById("EOE").appendChild(Structure1());
  document.getElementById("KNF").appendChild(Structure2());
  document.getElementById("Saturnine").appendChild(Structure2());
  document.getElementById("Warhawk").appendChild(Structure2());
};
exports.startApp = startApp;
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.backgroundColor = "#6b705c";
  document.querySelector("h1").style.color = "#b7b7a4";
  document.querySelector("p").style.color = "#ddbea9";
});