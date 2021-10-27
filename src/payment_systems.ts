import { BankDraftPayment } from "./BankDraftPayment";
import { CreditCardPayment } from "./CreditCardPayment";
import { IPayment } from "./IPayment";
import { OfflinePayment } from "./OfflinePayment";
import { OnlinePayment } from "./OnlinePayment";

export class PaymentSystemContext {
    private payType : string;

    setPayType(pt : string){
        this.payType = pt;
    }

    getPayType(){
        return this.payType;
    }

    constructor(payT : string){
        this.payType = payT;

        switch (this.getPayType()){
            case "CreditCard": {
                (new PaymentSystemExecutor(new CreditCardPayment)).execute();
                break;
            }
            case "BankDraft": {
                (new PaymentSystemExecutor(new BankDraftPayment)).execute();
                break;
            }
            case "Offline": {
                (new PaymentSystemExecutor(new OfflinePayment)).execute();
                break;
            }   
            case "Online": {
                (new PaymentSystemExecutor(new OnlinePayment)).execute();
                break;
            } 
        }  
    }
}

export class PaymentSystemExecutor {
    private payment : IPayment;

    constructor(payment : IPayment){        
        this.payment = payment;     
    }

    setPayment(p : IPayment){
        this.payment = p;
    }

    getPayment(){
        return this.payment;
    }

    getPaymentInfo(){
        this.getPayment().input();
    }

    validatePayment(){
        if (this.getPayment().validate()) {
            console.log("Your payment information is being encrypted.");
      
            console.log("The payment is being processed.")
        }
        else {
            console.log('The payment is invalid.');
        }
    }

    execute(){
        this.getPaymentInfo();
        this.validatePayment();
    }
}