"use strict";
exports.__esModule = true;
exports.BankDraftPayment = void 0;
var readlineSync = require("readline-sync");
var BankDraftPayment = /** @class */ (function () {
    function BankDraftPayment() {
        this.name = "";
        this.bankRoutingNumber = "";
        this.bankAccountNumber = "";
    }
    BankDraftPayment.prototype.getName = function () {
        return this.name;
    };
    BankDraftPayment.prototype.setName = function (name) {
        this.name = name;
    };
    BankDraftPayment.prototype.getRoutingNum = function () {
        return this.bankRoutingNumber;
    };
    BankDraftPayment.prototype.setRoutingNum = function (rn) {
        this.bankRoutingNumber = rn;
    };
    BankDraftPayment.prototype.getAccountNum = function () {
        return this.bankAccountNumber;
    };
    BankDraftPayment.prototype.setAccountNum = function (an) {
        this.bankAccountNumber = an;
    };
    BankDraftPayment.prototype.input = function () {
        console.log('Enter Bank Account Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setRoutingNum(readlineSync.question('  Bank Routing Number: '));
        this.setAccountNum(readlineSync.question('  Bank Account Number: '));
    };
    BankDraftPayment.prototype.validate = function () {
        var valid = /^[\w.' ]+$/.test(this.getName()) && /\d{9}/.test(this.getRoutingNum()) && /\d{6,12}/.test(this.getAccountNum());
        return valid;
    };
    return BankDraftPayment;
}());
exports.BankDraftPayment = BankDraftPayment;
