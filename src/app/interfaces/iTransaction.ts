import { QuittanceModel } from '../model/quittanceModel';
import { TimbreModel } from '../model/timbreModel';


export interface iTransaction {

    transactionType: string; //1
    
    moyenReception:string; //3
    emailReception:string;
    telReception:number;

    montantTotal: number;

    infoQuittance: QuittanceModel[]; //2
    panierTimbre: TimbreModel[];
    
    modePaiement:string;
    moyenPaiement:string

    telephonePaiement: number;
    codeAutorisationPaiement: number;

    codeServer:number;
    messageServer:string    
    
}

