"use strict";
exports.__esModule = true;
exports.CreditCardPayment = void 0;
var readlineSync = require("readline-sync");
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
        this.name = "";
        this.creditCardNumber = "";
        this.creditCardExpirationDate = "";
    }
    CreditCardPayment.prototype.setName = function (n) {
        this.name = n;
    };
    CreditCardPayment.prototype.getName = function () {
        return this.name;
    };
    CreditCardPayment.prototype.setCreditCardNumber = function (cn) {
        this.creditCardNumber = cn;
    };
    CreditCardPayment.prototype.getCreditCardNumber = function () {
        return this.creditCardNumber;
    };
    CreditCardPayment.prototype.setCreditCardExpirationDate = function (cd) {
        this.creditCardExpirationDate = cd;
    };
    CreditCardPayment.prototype.getCreditCardExpirationDate = function () {
        return this.creditCardExpirationDate;
    };
    CreditCardPayment.prototype.input = function () {
        console.log('Enter Credit Card Payment Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setCreditCardNumber(readlineSync.question('  Credit Card Number: '));
        this.setCreditCardExpirationDate(readlineSync.question('  Credit Card Expiration Date (MM/DD): '));
    };
    CreditCardPayment.prototype.validate = function () {
        var valid = /^[\w.' ]+$/.test(this.getName()) && /\d{15,16}/.test(this.getCreditCardNumber()) && /\d\d\/\d\d/.test(this.getCreditCardExpirationDate());
        return valid;
    };
    return CreditCardPayment;
}());
exports.CreditCardPayment = CreditCardPayment;
