"use strict";
exports.__esModule = true;
exports.OfflinePayment = void 0;
var readlineSync = require("readline-sync");
var OfflinePayment = /** @class */ (function () {
    function OfflinePayment() {
        this.name = "";
        this.billingAddress = "";
    }
    OfflinePayment.prototype.getName = function () {
        return this.name;
    };
    OfflinePayment.prototype.setName = function (name) {
        this.name = name;
    };
    OfflinePayment.prototype.getBillingAdd = function () {
        return this.billingAddress;
    };
    OfflinePayment.prototype.setBillingAdd = function (ba) {
        this.billingAddress = ba;
    };
    OfflinePayment.prototype.input = function () {
        console.log('Enter Offline Payment Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setBillingAdd(readlineSync.question('  Enter Your Billing Address: '));
    };
    OfflinePayment.prototype.validate = function () {
        var valid = /^[\w.' ]+$/.test(this.getName()) && /^[\w.' ]+$/.test(this.getBillingAdd());
        return valid;
    };
    return OfflinePayment;
}());
exports.OfflinePayment = OfflinePayment;
