"use strict";
exports.__esModule = true;
var Propulsor = /** @class */ (function () {
    function Propulsor(potencia) {
        this.potencia = potencia;
    }
    Propulsor.prototype.editProp = function (novaPotencia) {
        this.potencia = novaPotencia;
    };
    return Propulsor;
}());
exports["default"] = Propulsor;
