"use strict";
exports.__esModule = true;
exports.OnlinePayment = void 0;
var readlineSync = require("readline-sync");
var OnlinePayment = /** @class */ (function () {
    function OnlinePayment() {
        this.email = "";
        this.paymentPassword = "";
    }
    OnlinePayment.prototype.getEmail = function () {
        return this.email;
    };
    OnlinePayment.prototype.setEmail = function (email) {
        this.email = email;
    };
    OnlinePayment.prototype.getPayPass = function () {
        return this.paymentPassword;
    };
    OnlinePayment.prototype.setPayPass = function (payPass) {
        this.paymentPassword = payPass;
    };
    OnlinePayment.prototype.input = function () {
        console.log('Enter Online Payment Details.');
        this.setEmail(readlineSync.question('  Enter Your Email Address: '));
        this.setPayPass(readlineSync.question('  Enter Your Payment Password: '));
    };
    OnlinePayment.prototype.validate = function () {
        var valid = /^[\w@.]+$/.test(this.getEmail()) && /\w+/.test(this.getPayPass());
        return valid;
    };
    return OnlinePayment;
}());
exports.OnlinePayment = OnlinePayment;
