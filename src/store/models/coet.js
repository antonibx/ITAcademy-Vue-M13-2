"use strict";
exports.__esModule = true;
var Coet = /** @class */ (function () {
    function Coet(codi, propulsors) {
        this.codi = codi;
        this.propulsors = propulsors;
    }
    Coet.prototype.addProp = function (prop) {
        this.propulsors.push(prop);
    };
    return Coet;
}());
exports["default"] = Coet;
