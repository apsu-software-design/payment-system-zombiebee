import readlineSync = require('readline-sync');
import { IPayment } from "./IPayment";

export class CreditCardPayment implements IPayment{

    private name : string;
    private creditCardNumber : string;
    private creditCardExpirationDate : string;

    setName(n : string){
        this.name = n;
    }

    getName(){
        return this.name;
    }

    setCreditCardNumber(cn : string){
        this.creditCardNumber = cn;
    }

    getCreditCardNumber(){
        return this.creditCardNumber;
    }

    setCreditCardExpirationDate(cd : string){
        this.creditCardExpirationDate = cd;
    }

    getCreditCardExpirationDate(){
        return this.creditCardExpirationDate;
    }

    constructor(){
        this.name = "";
        this.creditCardNumber = "";
        this.creditCardExpirationDate = "";
    }

    input(){
        console.log('Enter Credit Card Payment Details.');

        this.setName(readlineSync.question('  Name: '));
        this.setCreditCardNumber(readlineSync.question('  Credit Card Number: '));
        this.setCreditCardExpirationDate(readlineSync.question('  Credit Card Expiration Date (MM/DD): '));
    }

    validate(){
        let valid = /^[\w.' ]+$/.test(this.getName()) && /\d{15,16}/.test(this.getCreditCardNumber()) && /\d\d\/\d\d/.test(this.getCreditCardExpirationDate());
        return valid;
    }
}