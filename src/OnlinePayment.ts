import readlineSync = require('readline-sync');
import { IPayment } from "./IPayment";

export class OnlinePayment implements IPayment{
    private email : string;
    private paymentPassword : string;

    constructor(){
        this.email = "";
        this.paymentPassword = "";
    }

    getEmail() : string{
        return this.email;
    }

    setEmail(email : string){
        this.email = email;
    }

    getPayPass() : string{
        return this.paymentPassword;
    }

    setPayPass(payPass : string){
        this.paymentPassword = payPass;
    }

    input() : void{
        console.log('Enter Online Payment Details.');
        this.setEmail(readlineSync.question('  Enter Your Email Address: '));
        this.setPayPass(readlineSync.question('  Enter Your Payment Password: '));
    }

    validate() : boolean{
        let valid = /^[\w@.]+$/.test(this.getEmail()) && /\w+/.test(this.getPayPass());
        return valid;
    }
}