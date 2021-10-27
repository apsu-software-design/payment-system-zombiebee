import readlineSync = require('readline-sync');
import { IPayment } from "./IPayment";

export class OfflinePayment implements IPayment{
    private name : string;
    private billingAddress :string;

    constructor(){
        this.name = "";
        this.billingAddress = "";
    }

    getName() : string{
        return this.name;
    }

    setName(name : string){
        this.name = name;
    }

    getBillingAdd() : string{
        return this.billingAddress;
    }

    setBillingAdd(ba : string){
        this.billingAddress = ba;
    }

    input() : void{
        console.log('Enter Offline Payment Details.');
        this.setName(readlineSync.question('  Name: '));
        this.setBillingAdd(readlineSync.question('  Enter Your Billing Address: '));
    }

    validate() : boolean{
        let valid = /^[\w.' ]+$/.test(this.getName()) && /^[\w.' ]+$/.test(this.getBillingAdd());
        return valid;
    }
}