import { QuittanceModel } from "./quittanceModel";
import { TimbreModel } from "./timbreModel";

export class Transaction {

    transactionType: string;
    
    moyenReception:string;
    emailReception:string;
    telReception:number;

    montantTotal: number;

    infoQuittance: QuittanceModel[] = [];
    panierTimbre: TimbreModel[] = [];
    
    oneQuittance: QuittanceModel;
    oneTimbre: TimbreModel;
    
    modePaiement:string;
    moyenPaiement:string

    numeroTransaction: string;
    firstName: string;
    lastName: string;
    telephone: number;
    numberDossierConsumer: string;

    codeServer:number;
    messageServer:string


        
    
}

