"use strict";
exports.__esModule = true;
exports.PaymentSystemExecutor = exports.PaymentSystemContext = void 0;
var BankDraftPayment_1 = require("./BankDraftPayment");
var CreditCardPayment_1 = require("./CreditCardPayment");
var OfflinePayment_1 = require("./OfflinePayment");
var OnlinePayment_1 = require("./OnlinePayment");
var PaymentSystemContext = /** @class */ (function () {
    function PaymentSystemContext(payT) {
        this.payType = payT;
        switch (this.getPayType()) {
            case "CreditCard": {
                (new PaymentSystemExecutor(new CreditCardPayment_1.CreditCardPayment)).execute();
                break;
            }
            case "BankDraft": {
                (new PaymentSystemExecutor(new BankDraftPayment_1.BankDraftPayment)).execute();
                break;
            }
            case "Offline": {
                (new PaymentSystemExecutor(new OfflinePayment_1.OfflinePayment)).execute();
                break;
            }
            case "Online": {
                (new PaymentSystemExecutor(new OnlinePayment_1.OnlinePayment)).execute();
                break;
            }
        }
    }
    PaymentSystemContext.prototype.setPayType = function (pt) {
        this.payType = pt;
    };
    PaymentSystemContext.prototype.getPayType = function () {
        return this.payType;
    };
    return PaymentSystemContext;
}());
exports.PaymentSystemContext = PaymentSystemContext;
var PaymentSystemExecutor = /** @class */ (function () {
    function PaymentSystemExecutor(payment) {
        this.payment = payment;
    }
    PaymentSystemExecutor.prototype.setPayment = function (p) {
        this.payment = p;
    };
    PaymentSystemExecutor.prototype.getPayment = function () {
        return this.payment;
    };
    PaymentSystemExecutor.prototype.getPaymentInfo = function () {
        this.getPayment().input();
    };
    PaymentSystemExecutor.prototype.validatePayment = function () {
        if (this.getPayment().validate()) {
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
        }
        else {
            console.log('The payment is invalid.');
        }
    };
    PaymentSystemExecutor.prototype.execute = function () {
        this.getPaymentInfo();
        this.validatePayment();
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
