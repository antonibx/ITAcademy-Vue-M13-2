"use strict";
exports.__esModule = true;
var coet_1 = require("../models/coet");
var coets;
var coet;
var regexCodi = /^(?<![\w\d])[0-9a-zA-Z]{8}\b/;
function creaCoet(codi, propulors) {
    var nouCoet = new coet_1["default"](codi, propulors);
    console.log("Nou coet: " + codi);
    coets.push(nouCoet);
}
exports["default"] = creaCoet;
/*
export default function veureCoets() {
    coets.forEach(coet => alert(coet));
}*/ 
