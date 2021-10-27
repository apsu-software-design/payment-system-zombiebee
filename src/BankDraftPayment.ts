import readlineSync = require('readline-sync');
import { IPayment } from "./IPayment";

export class BankDraftPayment implements IPayment{
    private name : string
    private bankRoutingNumber : string
    private bankAccountNumber : string

    constructor(){
        this.name = "";
        this.bankRoutingNumber = "";
        this.bankAccountNumber = "";
    }

    getName() : string{
        return this.name;
    }

    setName(name : string){
        this.name = name;
    }

    getRoutingNum() : string{
        return this.bankRoutingNumber;
    }

    setRoutingNum(rn : string){
        this.bankRoutingNumber = rn;
    }

    getAccountNum() : string{
        return this.bankAccountNumber;
    }

    setAccountNum(an : string){
        this.bankAccountNumber = an;
    }

    input() : void{
        console.log('Enter Bank Account Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setRoutingNum(readlineSync.question('  Bank Routing Number: '));
        this.setAccountNum(readlineSync.question('  Bank Account Number: '));
    }

    validate() : boolean{
        let valid = /^[\w.' ]+$/.test(this.getName()) && /\d{9}/.test(this.getRoutingNum()) && /\d{6,12}/.test(this.getAccountNum());
        return valid;
    }
}